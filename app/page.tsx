"use client"

import {ImageTextButtonSample} from "@/components/image-text-button-sample";
import TimelineSample from "@/components/section/timeline-sample";
import FullscreenSlider from "@/components/fullscreen-slider";
import Fullscreen from "@/components/fullscreen";
import IconTextRowBox from "@/components/icon-text-row-box";
import QnA from "@/components/section/q&a";

export default function Home() {
  return (
    <div>
        <main>
            {/*<div style={{position: 'relative', width: '100%', height: '500px'}}>*/}
            {/*    <Image*/}
            {/*        src="placeholder.svg"*/}
            {/*        alt="Example Image"*/}
            {/*        fill*/}
            {/*        style={{objectFit: 'cover'}}*/}
            {/*    />*/}
            {/*</div>*/}
            <FullscreenSlider/>
            <Fullscreen/>
            <div className={"container mx-auto px-4 max-w-6xl"}>
                <QnA/>
                <IconTextRowBox/>
                <ImageTextButtonSample/>
            </div>
            <TimelineSample/>

        </main>
    </div>
  );
}
