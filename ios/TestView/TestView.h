/*
 * @Author: yuta
 * @Date: 2021-04-22 15:53:34
 * @LastEditTime: 2021-04-23 13:57:30
 * @LastEditors: yuta
 */
//
//  TestView.h
//  TestProject
//
//  Created by edz on 2021/4/22.
//

#import <UIKit/UIKit.h>
#import "React/RCTComponent.h"

@interface TestView : UIView

@property(nonatomic,weak) UITextView *textView;

@property(nonatomic, copy) RCTBubblingEventBlock onClick;

    
@end

