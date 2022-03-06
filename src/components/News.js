import React, { Component } from 'react';
import Newsitem from './Newsitem';

export class News extends Component {
    articles= [
        {
            "source": {
                "id": "talksport",
                "name": "TalkSport"
            },
            "author": "Josh Fordham",
            "title": "Shane Warne to be honoured with state funeral after sudden death of Australian cricket legend at just 52...",
            "description": "",
            "url": "https://talksport.com/sport/cricket/1058009/shane-warne-state-funeral-australia-cricket-legend/",
            "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2022/03/4c3610d5-d6c5-4def-a5b0-85a0226c364a.jpg?strip=all&quality=100&w=1200&h=800&crop=1",
            "publishedAt": "2022-03-06T16:56:09Z",
            "content": "Australia will hold a state funeral for Shane Warne following the cricket icons death.\r\nWarne unexpectedly died on Friday after suffering a heart attack at the age of 52, leading to an outpouring of … [+3200 chars]"
        },
        {
            "source": {
                "id": "google-news-au",
                "name": "Google News (Australia)"
            },
            "author": "Sarah McPhee, Roy Ward",
            "title": "As it happened: Russian troops break Ukraine ceasefire; Shane Warne tributes continue to flow",
            "description": "Follow all the news from Ukraine as it happens, plus the tributes keep following for cricket great Shane Warne after his sudden death in Thailand.",
            "url": "https://www.smh.com.au/national/as-it-happened-russian-troops-break-ukraine-ceasefire-shane-warne-tributes-continue-to-flow-20220305-p5a22r.html",
            "urlToImage": "https://static.ffx.io/images/$zoom_0.5515625%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_55/t_crop_custom/q_86%2Cf_auto/t_smh_live_no_age_social_wm/ec46150513ca3379e3919d9b3bc30ea60ec2df63",
            "publishedAt": "2022-03-06T11:31:29+00:00",
            "content": "Sandbags line the pub in the main street of Picton where residents have been on standby on an evacuation warning issued on Saturday night when surrounding creek levels were rising.\r\nEllie Crump who m… [+2219 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]
    constructor(){
        super()
        console.log('news')
        this.state={
           articles: this.articles,
           loading:false
        }

    }
    render() {
        return (
            <div className='container my-3'>
                <h2>
                    News ~ Headlines
                </h2>
                {this.state.articles.map((e)=>{console.log(e)})}
                <div className="row">
                    <div className="col-md-4">
                        <Newsitem title='mytitle' description='mydesc' newsUrl='TODO' imgUrl="https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit-640x354.jpg" />

                    </div>
                

                </div>

            </div>
        );
    }
}

export default News;
