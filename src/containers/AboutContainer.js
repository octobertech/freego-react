import React from 'react';

import './App.css';

function AboutContainer(props) {

    return (
        <div>
            <br />

            <h3>О проекте</h3><br/>
            <p style={{fontSize: '13px'}}>FreeGo - это новое интернет приложение и сообщество, которое помогает кому угодно пожертвовать свои ненужные (или нужные) вещи, а также оказать всякую помощь всем тем кто в этом нуждается. Также есть телеграм канал <a href={'https://t.me/freegokanal'} target={'_blank'}>https://t.me/freegokanal</a>  куда копируются либо напрямую выкладываются новые объявления, и где можно тоже оставлять свои заявки в комментариях и связываться в случае интереса. </p>
            <br/>
            <p style={{fontSize: '13px'}}>FreeGo - это некоммерческий проект который делается на собственные средства команды, поэтому мы ищем волонтеров и открыты любой поддержке всех неравнодушных.</p>
            <br/><br/>
            <div>
                <p style={{fontSize: '13px'}}>© 2021 freegou.org</p><br/>
                <p style={{fontSize: '13px'}}>Телеграм:</p>
                <p style={{fontSize: '13px'}}><a href={"https://t.me/freegokanal"} target={"_blank"}>https://t.me/freegokanal</a></p>

            </div>

        </div>

    );
}

export default AboutContainer;

