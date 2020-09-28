import Link from "next/link"
import MainLayout from "../components/mainLayout"
import style from "../styles/error.module.scss"
export default function Errorpage() {
    return (
        <MainLayout>
            <h1 className={style.error} >Error 404</h1>
            <Link href="/"><a>Go back</a></Link>
        </MainLayout>
    )
}
