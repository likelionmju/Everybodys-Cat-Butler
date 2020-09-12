import React from "react";
import './Info Modify.css';

const Info_Modify = () => {
    return (
        <div id="information_modify_div">
            <div id="information_modify_text">
                <span>정보 수정</span>
            </div>

            <svg id="division_line" viewbox="0 0 455 1">
                <path d="M 0 0 L 455 0"></path>
            </svg>
            <div id="name_text">
                <span>닉네임</span>
            </div>

            <input type="text" id="name_input"></input>

            <div id="introduce_text">
                <span>한 줄 소개</span>
            </div>

            <input type="text" id="introduce_input"></input>

            <div id="location_text">
                <span>내 주요 위치</span>
                <svg id="Icon_pin" viewbox="7.875 3.375 14.047 20.29">
                    <path
                        d="M 14.8984375 3.375 C 11.02091407775879 3.375 7.874998569488525 6.296555519104004 7.874998569488525 9.89606761932373 C 7.874998569488525 14.96854782104492 14.8984375 23.6649341583252 14.8984375 23.6649341583252 C 14.8984375 23.6649341583252 21.921875 14.96854782104492 21.921875 9.89606761932373 C 21.921875 6.296555519104004 18.77595901489258 3.375 14.8984375 3.375 Z M 14.8984375 12.68593120574951 C 13.63519477844238 12.68593120574951 12.61094379425049 11.66168212890625 12.61094379425049 10.39843845367432 C 12.61094379425049 9.135194778442383 13.63519477844238 8.110944747924805 14.8984375 8.110944747924805 C 16.16168594360352 8.110944747924805 17.18593406677246 9.135194778442383 17.18593406677246 10.39843845367432 C 17.18593406677246 11.66168212890625 16.16168594360352 12.68593120574951 14.8984375 12.68593120574951 Z"></path>
                </svg>
            </div>

            <input type="text" id="location_input"></input>
            <div id="location_btn">
                <input type="button" id="location_left_btn"></input>

                <input type="button" id="location_right_btn"></input>

            </div>

            <input type="button" id="save_btn" value="저장하기"></input>

        </div>

    );
};

export default Info_Modify;