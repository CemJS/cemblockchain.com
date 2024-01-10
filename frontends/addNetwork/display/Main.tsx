import { Cemjsx, front } from "cemjs-all"
import addNetwork from "@json/addNetwork/addNetwork"
import addNetworkEN from "@json/addNetwork/en/addNetworkEN"
import metamask from '@svg/metamask.svg'

export default function () {

  const lang = front.Variable.stateLang === "ru" ? addNetwork : addNetworkEN

  return (
    <div class="add_network block_wrapper">

      <div class="add_network_title">
        <h1>
          {lang?.title}
        </h1>
        <div class="button_fox">
          <img src={metamask} style="margin-right: 1rem" />
          {lang?.textButton}
        </div>
      </div>
      <p>
        {lang?.paragraph1}
      </p>
      <p>
        {lang?.paragraph2}
      </p>
      {lang?.content?.map((item: any) => {
        return (
          <div class="blockImg">
            {item?.image ? <img src={item?.image} /> : null}
            <p>{item?.text}</p>
            {item?.p1 ?
              <div>
                <p>{item?.p1}</p>
                <p>{item?.p2} <a href="https://cemchain.com/">https://cemchain.com/</a></p>
                <p>{item?.p3}</p>
                <p>{item?.p4}</p>
                <p>{item?.p5} <a href="https://cemscan.com">https://cemscan.com</a></p>
                <p>{item?.p6}</p>
                <p>{item?.p7}</p>
              </div>
              : null}
          </div>
        )
      })}
    </div>
  )
}