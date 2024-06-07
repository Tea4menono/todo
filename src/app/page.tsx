import {Metadata} from 'next'
import {Header} from "@/components/Header";

export const metadata: Metadata = {
    title: 'Next.js',
}


export default function Page() {
    return (
        <div>
            <Header/>
        </div>

    )
}