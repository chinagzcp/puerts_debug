using Puerts;
using System;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.Profiling;
using System.Collections;

[Configure]
public class PuertsConfig
{
    [Typing]
    static IEnumerable<Type> Typeing
    {
        get
        {
            return new List<Type>()
            {
                //Unity Engine
                typeof(Handheld),
            };
        }
    }
    static IEnumerable<Type> Bindings
    {
        get
        {
            return new List<Type>()
            {
                //Unity Engine
#if !UNITY_STANDALONE_WIN
                typeof(Handheld), //Windows平台无法调用
#endif
                typeof(Coroutine),
                typeof(Profiler),
                typeof(UnityEventBase),
                typeof(UnityEvent),
                typeof(UnityEvent<int>),
                typeof(UnityEvent<int,int>),
                typeof(UnityEvent<int,int,int>),
                typeof(UnityAction),
                typeof(UnityAction<int>),
                typeof(UnityAction<int,int>),
                typeof(UnityAction<int,int,int>),
                //C# System
                typeof(Hashtable),
                typeof(Array),
                typeof(Convert),
                typeof(Delegate),
                typeof(DateTime),
                typeof(System.Object),
                typeof(List<int>),
                typeof(Dictionary<int,int>),
                //C# System.Reflection
                typeof(Type),
                typeof(MemberInfo),
                typeof(MethodBase),
                typeof(MethodInfo),
                typeof(ConstructorInfo),
                typeof(PropertyInfo),
                typeof(FieldInfo),
                typeof(ParameterInfo),
                //C# System.IO
                typeof(File),
                typeof(Directory),
                typeof(FileInfo),
                typeof(DirectoryInfo),
                typeof(Path),
                typeof(string),
                //C# System.Threading
                typeof(System.Threading.Thread),
                typeof(System.Threading.ThreadStart),
                typeof(System.Threading.ThreadState),
                typeof(System.Threading.Timeout),
                typeof(System.Threading.Timer),
                //C# System.Text
                typeof(System.Text.Encoding),
                //Sqlite3
                typeof(System.ComponentModel.Component),
                //Puerts
                typeof(JsEnv),
                typeof(ILoader),
                //Custom
            };
        }
    }

    [BlittableCopy]
    static IEnumerable<Type> Blittables
    {
        get
        {
            return new List<Type>()
            {
                //打开这个可以优化Vector3的GC，但需要开启unsafe编译
                //typeof(Vector3),
            };
        }
    }
    [Binding]
    static IEnumerable<Type> DynamicBindings
    {
        get
        {
            // 在这里添加名字空间
            var namespaces = new List<string>()
            {
                //Unity Api
                "UnityEngine",
                "UnityEngine.UI",
                "UnityEngine.Events",
                "UnityEngine.EventSystems",
                "UnityEngine.SceneManagement",
                "UnityEngine.TextEditor",
                "UnityEngine.Networking",
                "UnityEngine.Profiling",
                //Sqlite3
                "Mono.Data.Sqlite",
                "System.Data.Common",
                //System
                "System",
                "System.IO",
                "System.Net",
                "System.Net.Sockets",
                //DoTween
                "DG.Tweening",
                "DG.Tweening.Plugins",
                "DG.Tweening.Plugins.Options",
            };
            var unityTypes = (from assembly in AppDomain.CurrentDomain.GetAssemblies()
                              where !(assembly.ManifestModule is System.Reflection.Emit.ModuleBuilder)
                              from type in assembly.GetExportedTypes()
                              where (string.IsNullOrEmpty(type.Namespace) || namespaces.Contains(type.Namespace))
                                    && !IsExcluded(type)
                              select type);

            string[] customAssemblys = new string[] {
                "mscorlib",
                "Assembly-CSharp",
            };
            var customTypes = (from assembly in customAssemblys.Select(s => Assembly.Load(s))
                               where !(assembly.ManifestModule is System.Reflection.Emit.ModuleBuilder)
                               from type in assembly.GetExportedTypes()
                               where (string.IsNullOrEmpty(type.Namespace) || namespaces.Contains(type.Namespace))
                                    && !IsExcluded(type)
                               select type);
            return unityTypes
                .Concat(customTypes)
                .Concat(Bindings)
                .Distinct();
        }
    }
    static bool IsExcluded(Type type)
    {
        if (excludeAssemblys.Contains(Path.GetFileName(type.Assembly.Location)))
            return true;
        if (excludeNames.Contains(type.FullName?.Replace("+", ".") ?? ""))
            return true;
        if (type.BaseType != null)
            return IsExcluded(type.BaseType);

        return false;
    }
    static List<string> excludeAssemblys = new List<string>{
        "UnityEditor.dll",
        "Assembly-CSharp-Editor.dll",
    };
    static List<string> excludeNames = new List<string>
    {
        "UnityEngine.iPhone",
        "UnityEngine.iPhoneTouch",
        "UnityEngine.iPhoneKeyboard",
        "UnityEngine.iPhoneInput",
        "UnityEngine.iPhoneAccelerationEvent",
        "UnityEngine.iPhoneUtils",
        "UnityEngine.iPhoneSettings",
        "UnityEngine.AndroidInput",
        "UnityEngine.AndroidJavaProxy",
        "UnityEngine.BitStream",
        "UnityEngine.ADBannerView",
        "UnityEngine.ADInterstitialAd",
        "UnityEngine.RemoteNotification",
        "UnityEngine.LocalNotification",
        "UnityEngine.NotificationServices",
        "UnityEngine.MasterServer",
        "UnityEngine.Network",
        "UnityEngine.NetworkView",
        "UnityEngine.ParticleSystemRenderer",
        "UnityEngine.ParticleSystem.CollisionEvent",
        "UnityEngine.ProceduralPropertyDescription",
        "UnityEngine.ProceduralTexture",
        "UnityEngine.ProceduralMaterial",
        "UnityEngine.ProceduralSystemRenderer",
        "UnityEngine.TerrainData",
        "UnityEngine.HostData",
        "UnityEngine.RPC",
        "UnityEngine.AnimationInfo",
        "UnityEngine.UI.IMask",
        "UnityEngine.Caching",
        "UnityEngine.Handheld",
        "UnityEngine.MeshRenderer",
        "UnityEngine.UI.DefaultControls",
        "UnityEngine.AnimationClipPair", //Obsolete
        "UnityEngine.CacheIndex", //Obsolete
        "UnityEngine.SerializePrivateVariables", //Obsolete
        "UnityEngine.Networking.NetworkTransport", //Obsolete
        "UnityEngine.Networking.ChannelQOS", //Obsolete
        "UnityEngine.Networking.ConnectionConfig", //Obsolete
        "UnityEngine.Networking.HostTopology", //Obsolete
        "UnityEngine.Networking.GlobalConfig", //Obsolete
        "UnityEngine.Networking.ConnectionSimulatorConfig", //Obsolete
        "UnityEngine.Networking.DownloadHandlerMovieTexture", //Obsolete
        "AssetModificationProcessor", //Obsolete
        "AddressablesPlayerBuildProcessor", //Obsolete
        "UnityEngine.WWW", //Obsolete
        "UnityEngine.EventSystems.TouchInputModule", //Obsolete
        "UnityEngine.MovieTexture", //Obsolete[ERROR]
        "UnityEngine.NetworkPlayer", //Obsolete[ERROR]
        "UnityEngine.NetworkViewID", //Obsolete[ERROR]
        "UnityEngine.NetworkMessageInfo", //Obsolete[ERROR]
        "UnityEngine.UI.BaseVertexEffect", //Obsolete[ERROR]
        "UnityEngine.UI.IVertexModifier", //Obsolete[ERROR]
        //Windows Obsolete[ERROR]
        "UnityEngine.EventProvider",
        "UnityEngine.UI.GraphicRebuildTracker",
        "UnityEngine.GUI.GroupScope",
        "UnityEngine.GUI.ScrollViewScope",
        "UnityEngine.GUI.ClipScope",
        "UnityEngine.GUILayout.HorizontalScope",
        "UnityEngine.GUILayout.VerticalScope",
        "UnityEngine.GUILayout.AreaScope",
        "UnityEngine.GUILayout.ScrollViewScope",
        "UnityEngine.GUIElement",
        "UnityEngine.GUILayer",
        "UnityEngine.GUIText",
        "UnityEngine.GUITexture",
        "UnityEngine.ClusterInput",
        "UnityEngine.ClusterNetwork",
        //System
        "System.Tuple",
        "System.Double",
        "System.Single",
        "System.ArgIterator",
        "System.SpanExtensions",
        "System.TypedReference",
        "System.StringBuilderExt",
        "System.IO.Stream",
        "System.Net.HttpListenerTimeoutManager",
        "System.Net.Sockets.SocketAsyncEventArgs",
    };
}