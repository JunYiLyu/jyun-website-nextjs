import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function AlternateTimeline() {
    return (
        <Timeline
            className='mt-20'
            sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
            }}>
            <TimelineItem>
                <TimelineOppositeContent>
                    2024/06
                </TimelineOppositeContent>
                <CustomTimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </CustomTimelineSeparator>
                <TimelineContent>
                    <p className='font-bold'>Looptelecom</p>
                    <p></p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    2024/06
                </TimelineOppositeContent>
                <CustomTimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </CustomTimelineSeparator>
                <TimelineContent>
                    <p className='font-bold'>Looptelecom</p>
                    <p></p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    2024/06
                </TimelineOppositeContent>
                <CustomTimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </CustomTimelineSeparator>
                <TimelineContent>
                    <p className='font-bold'>Looptelecom</p>
                    <p></p>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}

function CustomTimelineSeparator({ children }: { children: any }) {
    return (
        <TimelineSeparator className='h-10 md:h-40 z-0'>
            {children}
        </TimelineSeparator>
    );
}