import { Cemjsx, Func, Static, Fn, front } from "cemjs-all"
import roadMap from "@json/roadMap/roadMap"
import roadMapEN from "@json/roadMap/en//roadMapEN"

export default function () {

  let lang: any

  if (front.Variable.stateLang) {
    lang = roadMap
  } else {
    lang = roadMapEN
  }

  return (
    <div class="main_block">
      <div class="roadmap block_wrapper">
        <h1>
          {lang?.mainTitle}
        </h1>
        <h3>{lang?.paragraphOne?.title}</h3>
        {lang?.paragraphOne?.content?.map((item: any) => {
          return (
            <div class="roadmap_marginB">
              <div class="roadmap_point">
              </div>
              {item.text}
            </div>
          )
        })}
        <h3>{lang?.paragraphTwo?.title}</h3>
        {lang?.paragraphTwo?.content?.map((item: any) => {
          return (
            <div class="roadmap_marginB">
              <div class="roadmap_point">
              </div>
              {item.text}
            </div>
          )
        })}
        <h3>{lang?.paragraphThree?.title}</h3>
        {lang?.paragraphThree?.content?.map((item: any) => {
          return (
            <div class="roadmap_marginB">
              <div class="roadmap_point">
              </div>
              {item.text}
            </div>
          )
        })}
        <h3>{lang?.paragraphFour?.title}</h3>
        {lang?.paragraphFour?.content?.map((item: any) => {
          return (
            <div class="roadmap_marginB">
              <div class="roadmap_point">
              </div>
              {item.text}
            </div>
          )
        })}
        <h3>{lang?.paragraphFive?.title}</h3>
        {lang?.paragraphFive?.content?.map((item: any) => {
          return (
            <div class="roadmap_marginB">
              <div class="roadmap_point">
              </div>
              {item.text}
            </div>
          )
        })}

      </div>
    </div>
  )
}