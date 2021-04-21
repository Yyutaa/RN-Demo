package com.testproject.Bugly;

import android.webkit.WebView;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.IllegalViewOperationException;
import com.tencent.bugly.crashreport.CrashReport;

import java.util.LinkedHashMap;
import java.util.Map;


public class SimpleBugly extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactApplicationContext;
    private static ReactApplicationContext reactContext;

    CrashReport.UserStrategy strategy = new CrashReport.UserStrategy(getReactApplicationContext());

    public SimpleBugly(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "Bugly";
    }

    @ReactMethod
    public void init(String Appid, Promise promise) {
        try {
            // 初始化Bugly
            CrashReport.initCrashReport(getReactApplicationContext(), Appid, true);
        } catch(IllegalViewOperationException e) {
            promise.reject("Init error", e);
        }
    }

//    @ReactMethod
//    public  void testCrash(Promise promise) {
//        try {
//            CrashReport.testJavaCrash();
//        } catch(IllegalViewOperationException e) {
//            promise.reject("Crash error", e);
//        }
//    }

    @ReactMethod
    public void testCrash() {
        CrashReport.testJavaCrash();
    }


}
