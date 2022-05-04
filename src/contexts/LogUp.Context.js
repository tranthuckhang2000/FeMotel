import React, {useState, createContext} from "react";

const LogUpContext = createContext();

function LogUpProvider({children}) {
    const [email, setEmail] = useState("Khangtran@gmail.com");
    const [checkEmail, setCheckEmail] = useState(true);

    const [otp, setOtp] = useState();
    const [checkOtp, setCheckOtp] = useState();

    const [fullName, setFullName] = useState("");
    const [checkFillFullName, setCheckFillFullName] = useState();
    const [checkSpecialInFullName, setCheckSpecialInFullName] = useState("false");

    const [pass, setPass] = useState("");
    const [checkPass, setCheckPass] = useState();
    const [checkFillPass, setCheckFillPass] = useState();

    const [rePass, setRePass] = useState("");
    const [checkFillRepass, setCheckFillRepass] = useState();
    const [checkRePass, setCheckRePass] = useState();
    const [coincidePass, setCoincidePass] = useState();

    function isEmail(email) {
        var isValid = false;
        var regex =
            /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (regex.test(email)) {
            isValid = true;
        }
        return isValid;
    }

    const onSubmitEvent = (e) => {
        e.preventDefault();
        // console.log("onSubmit");
    };

    const checkPassCoinCide = () => {
        if (pass !== rePass) {
            setCoincidePass(false);
        } else {
            setCoincidePass(true);
        }
    };

    var value = {
        email,
        setEmail,
        checkEmail,
        setCheckEmail,
        isEmail,
        onSubmitEvent,
        otp,
        setOtp,
        checkOtp,
        setCheckOtp,
        fullName,
        setFullName,
        checkFillFullName,
        setCheckFillFullName,
        checkSpecialInFullName,
        setCheckSpecialInFullName,
        pass,
        setPass,
        checkFillPass,
        setCheckFillPass,
        checkPass,
        setCheckPass,
        rePass,
        setRePass,
        checkRePass,
        setCheckRePass,
        checkFillRepass,
        setCheckFillRepass,
        coincidePass,
        setCoincidePass,
        checkPassCoinCide
    };

    return (
        <LogUpContext.Provider value={value}>{children}</LogUpContext.Provider>
    );
}

export {LogUpContext, LogUpProvider};
