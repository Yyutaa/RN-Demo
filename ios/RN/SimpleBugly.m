//
//  SimpleBugly.m
//  TestProject
//
//  Created by edz on 2021/4/21.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <Bugly/Bugly.h>

@interface SimpleBugly : NSObject<RCTBridgeModule>
@end


@implementation SimpleBugly

RCT_EXPORT_MODULE();

// Promise version
//RCT_REMAP_METHOD(init, ID:(NSString *)ID resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject){
//  NSLog(@"this is a test");
//  if(!ID){
//    reject(nil,@"Empty ID",nil);
//    return;
//  }
//
//  [Bugly startWithAppId: ID];
//  resolve(nil);
//}

RCT_REMAP_METHOD(init, ID:(NSString *)ID){
  if(!ID){
    NSLog(@"There is no id");
    return;
  }
  
  [Bugly startWithAppId: ID];
}

@end


