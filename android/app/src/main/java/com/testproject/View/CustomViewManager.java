package com.testproject.View;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

import java.util.Map;

public class CustomViewManager extends SimpleViewManager<CustomView> {
    public static final String REACT_CLASS = "CustomView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    public CustomView createViewInstance(ThemedReactContext reactContext) {
        return new CustomView(reactContext);
    }

    @Override
    public Map getExportedCustomBubblingEventTypeConstants() {
        return MapBuilder.builder()
                .put("onClick", MapBuilder.of(
                        "phasedRegistrationNames",
                        MapBuilder.of("bubbled", "onClick")
                )).build();
    }
}
