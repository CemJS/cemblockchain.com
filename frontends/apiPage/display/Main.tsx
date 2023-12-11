import { Cemjsx, Func, Static, Fn, front } from "cemjs-all"
import apiInfo from "@json/apiInfo/apiInfo"

export default function () {

  const lang = apiInfo

  return (
    <div class="api block_wrapper">
      <h2>{lang?.title}</h2>
      {lang?.content?.map((item: any, index: number) => {
        const blockId = `response_${index}`
        console.log("item", item, index, blockId)

        return (
          <div key={blockId}>
            <p>{item?.paragraph}</p>
            <span>{item?.span}</span>
            <div class="response_container">
              <div class="response" id={blockId} contenteditable="true">
                {JSON.stringify(item?.input)}
              </div>
              <div class="result" id={blockId + '_result'}></div>
              <button class="send" onclick={async () => {
                if (document.querySelector(`#${blockId}`) !== null) {
                  const responseInput = document.querySelector('#' + blockId).textContent
                  const response = await front.Services.functions.sendApi('https://cemchain.com/', JSON.parse(responseInput))
                  const resultContent = JSON.stringify(response)
                  document.querySelector('#' + blockId + '_result').textContent = resultContent
                } else {
                  console.error('Element not found');
                }
              }}>Send</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}