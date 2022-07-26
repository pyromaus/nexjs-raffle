import { ConnectButton } from "web3uikit"
import { useMoralis } from "react-moralis"

// const { chainId: chainIdHex, isWeb3Enabled } = useMoralis()
// puling out chainId object out of useMoralis and naming it chainidhex
// const chainId = parseInt(chainIdHex)
// parsing the hex number into an integer

export default function Header() {
    return (
        <div className="p-5 border-b-2 flex flex-row">
            <h1 className="py-4 px-4 font-blog text-3xl">Decentro Lotty 69: </h1>
            <div className="ml-auto py-2 px-4">
                <ConnectButton moralisAuth={false} />
            </div>
        </div>
    )
}
