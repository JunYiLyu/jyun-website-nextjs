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
                    <p className='mt-3'>基於 Java EE MVC 框架改寫老舊的 VB6 網管系統、使用 Ext.js 開發前端頁面</p>
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
                    <p className='mt-3'>使用 .NET Core 6 框架來開發後端業務邏輯，並透過 Entity Framework Core (EF Core) 操作 SQL Server 資料庫，打造一個資產管理系統。這個系統將提供一系列 API，方便客戶端及前端系統進行整合，以實現電腦資產的全面收集與管理應用</p>
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
                    <p className='mt-3'>研究主題聚焦於機器學習分群，運用神經網路估計資料分佈的梯度，實現資料群聚分群。為了完成這項研究，使用 PyTorch 進行網路訓練，搭配NumPy、Matplotlib 等視覺與運算工具</p>
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