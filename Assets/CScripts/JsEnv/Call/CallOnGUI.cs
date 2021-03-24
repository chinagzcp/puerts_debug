using System;

public class CallOnGUI : CallAction
{
    private void OnGUI()
    {
        callback?.Invoke();
    }
}