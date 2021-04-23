package com.testproject.View;

import android.content.Context;
import android.graphics.Color;
import android.view.View;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.RCTEventEmitter;

public class CustomView extends View {

    public CustomView(Context context) {
        super(context);
//        this.setBackgroundColor(Color.rgb(255,0,0));
        this.setBackgroundColor(Color.BLUE);
//        this.onReciveNativeEvent();
    }

    public void onReciveNativeEvent() {
        WritableMap event = Arguments.createMap();
        event.putString("message", "MyMessage");
        ReactContext reactContext = (ReactContext)getContext();
        reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(getId(), "onClick", event);
    }
}