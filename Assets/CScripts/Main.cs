using System;
using UnityEngine;
using UnityEngine.SceneManagement;
using System.Collections;
using UnityEngine.UI;
using System.Net.NetworkInformation;
using System.Net.Sockets;

public class Main : MonoBehaviour
{
    void Start()
    {
        JsManager.ReleaseInstance();
        JsManager.GetInstance().JsEnv.Eval("require('./main')");
    }
}
