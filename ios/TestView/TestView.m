//
//  TestView.m
//  TestProject
//
//  Created by edz on 2021/4/22.
//

//#import <Foundation/Foundation.h>
#import "TestView.h"

@implementation TestView
- (instancetype)init
{
    self = [super init];
    if (self) {
        self.backgroundColor = [UIColor redColor];
    }
//    UITextView *textView = [[UITextView alloc] initWithFrame: CGRectMake(20, 20, 200, 40)];
//
//    textView.text = @"Custom View";
//    //设置字体大小
//    [textView setFont:[UIFont systemFontOfSize:20]];
//    //添加文件组件
//    [self addSubview:textView];
  
    //创建一个按钮组件
    UIButton *button = [UIButton buttonWithType:UIButtonTypeSystem];
    button.frame = CGRectMake(0, 30, 100, 40);
    [button setTitle:@"发送事件到RN" forState:UIControlStateNormal];
  
    [button addTarget:self action:@selector(sendEventToReactNative:) forControlEvents:UIControlEventTouchUpInside];
    [self addSubview:button];
  
    return self;
}

//按钮的响应事件
- (void)sendEventToReactNative:(UIButton *)button{
    NSLog(@"sendEventToReactNative");
    //往RN端发送事件
    self.onClick(@{@"message":@"IOS原生端回传的数据"});
}

@end
