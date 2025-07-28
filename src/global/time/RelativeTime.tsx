import React from "react";
import {DateTime} from "luxon";

interface RelativeTimeProps {
  date: Date | string;
}

// RelativeTime 使用示例
// import RelativeTime from "@src/components/time/RelativeTime.tsx";
// <RelativeTime date={timestamp}/>
const RelativeTime: React.FC<RelativeTimeProps> = ({date}) => {
  const timeAgo = DateTime.fromJSDate(
    typeof date === "string" ? new Date(date) : date
  ).toRelative({
    locale: "zh-CN", // 中文本地化
  });

  return <span>{timeAgo}</span>;
};

export default RelativeTime;