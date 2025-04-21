export default function Signin() {

    return <div className="w-screen h-screen flex justify-center items-center">
        <div className="border-2 p-2">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />

            <button className="border-2 rounded-lg p-2 bg-blue-400 cursor-pointer">Signin</button>
        </div>
    </div>
}