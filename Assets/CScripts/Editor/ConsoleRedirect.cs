using System.IO;
using System.Reflection;
using System.Text.RegularExpressions;
using UnityEditor;
using UnityEditor.Callbacks;
using UnityEngine;

public class ConsoleRedirect : Editor
{
    const string EDITOR_PATH = "EDITOR_PATH_KEY";
    const string PROJECT_PATH = "PROJECT_PATH_KEY";

    //匹配文件后缀名
    static readonly string[] suffix = new[] { ".js", ".ts" };
    //匹配文件名和行号
    static readonly Regex regexLine = new Regex(string.Format(@" at (.+)({0})\:(\d+)\:(\d+)\)?\r?\n", string.Join("|", suffix)));
    static readonly Regex regexEx = new Regex(string.Format(@" at (.+) \((.+)({0})\:(\d+)\:(\d+)\)", string.Join("|", suffix)));

    [OnOpenAsset(0)]
    static bool OnOpen(int instanceID, int lineId)
    {
        var track = GetStackTrace();
        if (string.IsNullOrEmpty(track))
            return false;
        //匹配文件(路径/后缀名/行数/列数)
        var match = regexLine.Match(track);
        while (match.Success)
        {
            var filepath = match.Groups[1].Value + match.Groups[2].Value;
            var line = int.Parse(match.Groups[3].Value);
            var column = int.Parse(match.Groups[4].Value);
            //匹配带括号的输出
            var matchEx = regexEx.Match(match.Groups[0].Value);
            if (matchEx.Success)
            {
                try
                {
                    var _filepath = matchEx.Groups[2].Value + matchEx.Groups[3].Value;
                    var _line = int.Parse(matchEx.Groups[4].Value);
                    var _column = int.Parse(matchEx.Groups[5].Value);
                    filepath = _filepath;
                    line = _line;
                    column = _column;
                }
                catch { }
            }
            if (File.Exists(filepath))
                return OpenFileWith(filepath, line, column);

            match = match.NextMatch();
        }
        return false;
    }
    static bool OpenFileWith(string filepath, int line, int column)
    {
        string editorPath = EditorUserSettings.GetConfigValue(EDITOR_PATH);
        if (string.IsNullOrEmpty(editorPath) || !File.Exists(editorPath))
        {
            SetEditorPath();
            editorPath = EditorUserSettings.GetConfigValue(EDITOR_PATH);
            if (string.IsNullOrEmpty(editorPath))
                return false;
        }
        string projectPath = EditorUserSettings.GetConfigValue(PROJECT_PATH);
        if (string.IsNullOrEmpty(projectPath) || !Directory.Exists(projectPath))
        {
            SetProjectPath();
            projectPath = EditorUserSettings.GetConfigValue(PROJECT_PATH);
            if (string.IsNullOrEmpty(projectPath))
                return false;
        }
        //默认为VScode的启动参数
        var args = string.Format("\"{0}\" -g \"{1}\":{2}:{3}", projectPath, filepath, line, column);

        System.Diagnostics.Process proc = new System.Diagnostics.Process();
        proc.StartInfo.FileName = editorPath;
        proc.StartInfo.Arguments = args;
        proc.Start();
        return true;
    }

    [MenuItem("Tools/Console/Set IDE Path")]
    static void SetEditorPath()
    {
        string path = EditorUserSettings.GetConfigValue(EDITOR_PATH);
        path = EditorUtility.OpenFilePanel("Select Your IDE", path, "exe");
        if (!string.IsNullOrEmpty(path))
        {
            EditorUserSettings.SetConfigValue(EDITOR_PATH, path);
            Debug.Log("IDE Path: " + path);
        }
    }
    [MenuItem("Tools/Console/Set Project Path")]
    static void SetProjectPath()
    {
        string path = EditorUserSettings.GetConfigValue(PROJECT_PATH);
        path = EditorUtility.OpenFolderPanel("Select Your Project", path, "");
        if (!string.IsNullOrEmpty(path))
        {
            EditorUserSettings.SetConfigValue(PROJECT_PATH, path);
            Debug.Log("Project Path: " + path);
        }
    }
    [MenuItem("Tools/Console/PrintPaths")]
    static void PrintPaths()
    {
        Debug.Log("IDE Path: " + EditorUserSettings.GetConfigValue(EDITOR_PATH));
        Debug.Log("Project Path: " + EditorUserSettings.GetConfigValue(PROJECT_PATH));
    }
    static string GetStackTrace()
    {
        var editorAssembly = Assembly.GetAssembly(typeof(EditorWindow));
        var consoleWindowType = editorAssembly.GetType("UnityEditor.ConsoleWindow", false);
        var fieldInfo = consoleWindowType.GetField(
                                "ms_ConsoleWindow", BindingFlags.Static | BindingFlags.NonPublic);

        var consoleWindow = fieldInfo.GetValue(null) as EditorWindow;
        if (consoleWindow != EditorWindow.focusedWindow)
        {
            return null;
        }
        var activeTextFieldInfo = consoleWindowType.GetField(
                                   "m_ActiveText", BindingFlags.Instance | BindingFlags.NonPublic);

        return (string)activeTextFieldInfo.GetValue(consoleWindow);
    }
}
