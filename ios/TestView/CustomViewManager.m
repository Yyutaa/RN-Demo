//
//  CustomViewManager.m
//  TestProject
//
//  Created by edz on 2021/4/22.
//

#import "CustomViewManager.h"
#import <React/RCTViewManager.h>
#import "TestView.h"

@implementation RNTCustomViewManager

RCT_EXPORT_MODULE(CustomView)

RCT_EXPORT_VIEW_PROPERTY(onClick, RCTBubblingEventBlock)

- (UIView *)view
{
    return [[TestView alloc] init];
}

@end
