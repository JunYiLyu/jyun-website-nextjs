import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

export default function AlternateTimeline() {
    return (
        <Timeline
            className='mt-10'
            sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.4,
                },
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
            }}>
            <TimelineItem>
                <TimelineOppositeContent>
                    <p className='font-bold  text-cyan-900'> 2024/06</p>
                </TimelineOppositeContent>
                <CustomTimelineSeparator>
                    <TimelineDot >
                        <WorkIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </CustomTimelineSeparator>
                <TimelineContent>
                    <p className='font-bold'>星通資訊 全端工程師</p>
                    <p className='hidden md:mt-3 md:block'>1. 開發核心網管系統，建置診斷、TDM Cross Connect 及 PSN VLAN 設定模組，優化使用者操作體驗</p>
                    <p className='hidden md:mt-1 md:block'>2. Oracle DB 移植到 Mysql DB 兼容性研究</p>
                    <p className='hidden md:mt-1 md:block'>3. 採用純 Java EE Servlet 實現後端業務邏輯，並基於 MVC 架構開發</p>
                    <p className='hidden md:mt-1 md:mb-3 md:block'>4. 前端開發採用 Ext.js 使用 desktop, window 元件構建類似作業系統 GUI 的網管系統介面</p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <p className='font-bold text-cyan-900'> 2023/07 </p>
                </TimelineOppositeContent>
                <CustomTimelineSeparator>
                    <TimelineDot >
                        <WorkIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </CustomTimelineSeparator>
                <TimelineContent>
                    <p className='font-bold'>華碩電腦 後端工程師</p>
                    <p className='hidden md:mt-3 md:block'>1. 使用 C# .NET 框架與 EF Core ORM 整合 SQL Server，開發資產管理應用程式後端業務邏輯，確保系統的穩定性與數據完整性</p>
                    <p className='hidden md:mt-1 md:block'>2. 將單體服務架構轉型為微服務，分為檔案服務、應用程式服務、加密服務</p>
                    <p className='hidden md:mt-1 md:block'>3. 參與 code reivew 找出潛在程式問題</p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <p className='font-bold  text-cyan-900'> 2023/02 </p>
                </TimelineOppositeContent>
                <CustomTimelineSeparator>
                    <TimelineDot>
                        <SchoolIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </CustomTimelineSeparator>
                <TimelineContent>
                    <p className='font-bold'>臺灣科技大學 資訊管理所</p>
                    <p className='hidden md:mt-3 md:block'>研究主題聚焦於機器學習分群，運用神經網路估計資料分佈的梯度，實現資料群聚分群。為了完成這項研究，使用 PyTorch 進行網路訓練，搭配NumPy、Matplotlib 等視覺與運算工具</p>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}

function CustomTimelineSeparator({ children }: { children: any }) {
    return (
        <TimelineSeparator className='h-24 md:h-36'>
            {children}
        </TimelineSeparator>
    );
}