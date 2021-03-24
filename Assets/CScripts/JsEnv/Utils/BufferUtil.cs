using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Puerts;
using System;

public static class BufferUtil
{
    public static byte[] Create(int size)
    {
        return new byte[size];
    }
    public static byte[] Connect(byte[] first, byte[] second)
    {
        var result = new byte[first.Length + second.Length];
        Array.Copy(first, 0, result, 0, first.Length);
        Array.Copy(second, 0, result, first.Length, second.Length);
        return result;
    }
}
