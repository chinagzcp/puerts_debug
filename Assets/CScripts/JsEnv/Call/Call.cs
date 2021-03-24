using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Call : MonoBehaviour, IDisposable
{
    public Call()
    {
        this.Init();
    }
    ~Call()
    {
        Release();
    }

    public virtual void Init()
    {
    }
    public virtual void Release()
    {
    }
    public void Dispose()
    {
        Release();
    }
}

public class CallAction : Call
{
    public virtual Action callback { get; set; }

    public override void Release()
    {
        base.Release();
        callback = null;
    }
}
