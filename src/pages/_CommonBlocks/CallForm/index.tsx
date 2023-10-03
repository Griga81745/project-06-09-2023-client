import css from './index.module.scss'

import axios from 'axios'
import { useMutation } from 'react-query'

import arrow from '../../../assets/components/home-block7-arrow.png'
import bgLayer1 from '../../../assets/components/home-block7-bglayer1.png'
import bgLayer2 from '../../../assets/components/home-block7-bglayer2.png'
import bgLayer3 from '../../../assets/components/home-block7-bglayer3.png'
import Heading from '../../../components/Heading'
import Button from '../../../components/Button'
import Input from '../../../components/Input'


export default function Block(){
    const mutation = useMutation({
        mutationFn: async (newCallForm: FormData) => {
            return axios.post('http://localhost:8000/api/booking/form-phone/', newCallForm)
        },
        onSuccess: () => {
            alert('Мы вам скоро перезвоним!')
        }
    })

    return <div className={css.block}>
        <img className={css.bgLayer3} src={bgLayer3} alt="bgLayer3" />
        <img className={css.bgLayer2} src={bgLayer2} alt="bgLayer2" />
        <img className={css.bgLayer1} src={bgLayer1} alt="bgLayer1" />
        <div className={css.container}>
            <Heading center>
                <div className={css.heading}>Хотите выглядеть и чувствовать себя красивее как никогда раньше?</div>
            </Heading>
            <div className={css.subheading}>Запишитесь на бесплатный приём в клинику пластической хирургии Clinicestetic!</div>
            <div className={css.form}>
                <form action="" onSubmit={ e => {e.preventDefault(); mutation.mutate(new FormData(e.currentTarget))} }>
                    <div className={css.formInner}>
                            <Input
                                className={css.formInput}
                                fullWidth
                                disabled={mutation.isSuccess}
                                placeholder='Ваш телефон*'
                                type='text'
                                name='phone_number'
                            />
                            <Button disabled={mutation.isSuccess} className={css.formButton} fullWidth>
                                Позвонить за 9 секунд
                                <img className={css.formButtonArrow} src={arrow} alt="arrow" />
                            </Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}