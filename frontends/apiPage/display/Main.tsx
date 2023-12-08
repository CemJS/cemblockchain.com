import { Cemjsx, Func, Static, Fn, front } from "cemjs-all"

export default function () {

  return (
    <div class="api block_wrapper">
      <h2>API Info</h2>
      <p>web3_clientVersion</p>
      <span>Returns the current client version.</span>
      <div class="response_container">
        <div class="response" contenteditable="true">
          "jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67"
        </div>
        <div class="result"></div>
        <button class="send" onclick={async () => {
          let data = { "jsonrpc": "2.0", "method": "web3_clientVersion", "params": [], "id": 67 }
          let answer = await front.Services.functions.sendApi("https://cemchain.com/", data)
          console.log("answer", answer);
        }}>Send</button>
      </div>

      <p>web3_sha3</p>
      <span>Returns Keccak-256 (not the standardized SHA3-256) of the given data.</span>
      <div class="response_container">
        <div class="response" contenteditable="true">
          "jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67"
        </div>
        <div class="result"></div>
        <button class="send">Send</button>
      </div>

      <p>net_version</p>
      <span>Returns the current network id.</span>
      <div class="response_container">
        <div class="response" contenteditable="true">
          "jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67"
        </div>
        <div class="result"></div>
        <button class="send">Send</button>
      </div>

      <p>net_peerCount</p>
      <span>Returns number of peers currently connected to the client.</span>
      <div class="response_container">
        <div class="response" contenteditable="true">
          "jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67"
        </div>
        <div class="result"></div>
        <button class="send">Send</button>
      </div>

      <p>net_listening</p>
      <span>Returns true if client is actively listening for network connections.</span>
      <div class="response_container">
        <div class="response" contenteditable="true">
          "jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67"
        </div>
        <div class="result"></div>
        <button class="send">Send</button>
      </div>

      <p>eth_syncing</p>
      <span>Returns an object with data about the sync status or false.</span>
      <div class="response_container">
        <div class="response" contenteditable="true">
          "jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67"
        </div>
        <div class="result"></div>
        <button class="send">Send</button>
      </div>

      <p>eth_coinbase</p>
      <span>Returns the client coinbase address.</span>
      <div class="response_container">
        <div class="response" contenteditable="true">
          "jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67"
        </div>
        <div class="result"></div>
        <button class="send">Send</button>
      </div>

      <p>eth_gasPrice</p>
      <span>Returns the current price per gas in wei.</span>
      <div class="response_container">
        <div class="response" contenteditable="true">
          "jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67"
        </div>
        <div class="result"></div>
        <button class="send">Send</button>
      </div>

      <p>eth_accounts</p>
      <span>Returns a list of addresses owned by client.</span>
      <div class="response_container">
        <div class="response" contenteditable="true">
          "jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67"
        </div>
        <div class="result"></div>
        <button class="send">Send</button>
      </div>

      <p>eth_blockNumber</p>
      <span>Returns the number of most recent block.</span>
      <div class="response_container">
        <div class="response" contenteditable="true">
          "jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67"
        </div>
        <div class="result"></div>
        <button class="send">Send</button>
      </div>

      <p>eth_getBalance</p>
      <span>Returns the balance of the account of given address.</span>
      <div class="response_container">
        <div class="response" contenteditable="true">
          "jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67"
        </div>
        <div class="result"></div>
        <button class="send">Send</button>
      </div>

      <p>eth_getTransactionCount</p>
      <span>Returns the number of transactions sent from an address.</span>
      <div class="response_container">
        <div class="response" contenteditable="true">
          "jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67"
        </div>
        <div class="result"></div>
        <button class="send">Send</button>
      </div>

      <p>eth_getBlockTransactionCountByHash</p>
      <span>Returns the number of transactions in a block from a block matching the given block hash.</span>
      <div class="response_container">
        <div class="response" contenteditable="true">
          "jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67"
        </div>
        <div class="result"></div>
        <button class="send">Send</button>
      </div>

      <p>eth_getBlockTransactionCountByNumber</p>
      <span>Returns the number of transactions in a block matching the given block number.</span>
      <div class="response_container">
        <div class="response" contenteditable="true">
          "jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67"
        </div>
        <div class="result"></div>
        <button class="send">Send</button>
      </div>

      <p>eth_getUncleCountByBlockHash</p>
      <span>Returns the number of uncles in a block from a block matching the given block hash.</span>
      <div class="response_container">
        <div class="response" contenteditable="true">
          "jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67"
        </div>
        <div class="result"></div>
        <button class="send">Send</button>
      </div>

      <p>eth_getCode</p>
      <span>Returns code at a given address.</span>
      <div class="response_container">
        <div class="response" contenteditable="true">
          "jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67"
        </div>
        <div class="result"></div>
        <button class="send">Send</button>
      </div>
    </div>
  )
}