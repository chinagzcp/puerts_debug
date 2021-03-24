"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneMgr = void 0;
const CS = require("csharp");
const assetMgr_1 = require("./assetMgr");
const boxMgr_1 = require("./boxMgr");
const generator_1 = require("../../common/generator");
const { AsyncOperation } = CS.UnityEngine;
const { LoadSceneMode, SceneManager } = CS.UnityEngine.SceneManagement;
class SceneMgr {
    loadSceneSync(name, mode) {
        name = name;
        if (mode === undefined)
            SceneManager.LoadScene(name);
        else
            SceneManager.LoadScene(name, mode);
    }
    loadScene(name, callback, mode) {
        function* doing() {
            name = name;
            let async = undefined;
            if (mode === undefined)
                async = SceneManager.LoadSceneAsync(name);
            else
                async = SceneManager.LoadSceneAsync(name, mode);
            async.allowSceneActivation = true;
            yield async;
            callback();
        }
        let mgr = CS.JsManager.GetInstance();
        mgr.StopAllCoroutines();
        mgr.StartCoroutine(generator_1.cs_generator(doing()));
    }
    load(name, fileNames, callback) {
        let mgr = CS.JsManager.GetInstance();
        function* doing() {
            let target = 0;
            let load = $.getInstance(assetMgr_1.AssetMgr).loadPack(...fileNames);
            load.progress((v, index, total) => target = (v + index - 1) / total);
            load.complete(() => target = 1);
            mgr.StartCoroutine(generator_1.cs_generator(load.generator));
            let value = 0;
            let slider = $.getInstance(boxMgr_1.BoxMgr).slider(0, "加载中", 0);
            while (value < 1) {
                if (value < target)
                    value += 0.01;
                slider.setValue(value);
                yield undefined;
            }
            slider.setValue(1);
            let async = SceneManager.LoadSceneAsync(name);
            async.allowSceneActivation = true;
            yield async;
            callback();
        }
        mgr.StopAllCoroutines();
        mgr.StartCoroutine(generator_1.cs_generator(doing()));
    }
}
exports.SceneMgr = SceneMgr;
//# sourceMappingURL=sceneMgr.js.map