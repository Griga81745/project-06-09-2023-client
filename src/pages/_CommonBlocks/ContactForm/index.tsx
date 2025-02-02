import css from './index.module.scss'

import { API_URL } from '@/config'
import axios from 'axios'
import { useMutation } from 'react-query'
import { AiFillCheckCircle } from 'react-icons/ai'

import arrow from '../../../assets/components/home-block8-arrow.png'
import bg from '../../../assets/components/home-block8-bg.png'
import Heading from '../../../components/Heading'
import Card, {CardContent} from '../../../components/Card'
import Container from '../../../components/Container'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import {useTranslation} from "react-i18next";


export default function Block(){
    const mutation = useMutation({
        mutationFn: async (newFeedbackForm: FormData) => {
            return axios.post(`${API_URL}booking/form-feedback/`, newFeedbackForm)
        }
    })

    const {t} = useTranslation();
    

    return <div className={css.block}>
        <img className={css.bg} src={bg} alt="bg" />
        <Container className={css.container}>
            <Heading center>
                <div className={css.heading}>{t("Home_block8_title")}</div>
            </Heading>
            <Card className={css.form}>
                <CardContent>
                    <form onSubmit={ e => {e.preventDefault(); mutation.mutate(new FormData(e.currentTarget))} }>
                        <div className={css.formInner}>
                            <Input
                                type='text'
                                placeholder={t("Home_block8_placeholder1")}
                                name='full_name'
                                fullWidth
                                disabled={mutation.isSuccess}
                                required
                            />
                            <Input
                                type='text'
                                placeholder={t("Home_block8_placeholder2")}
                                name='phone_number'
                                fullWidth
                                disabled={mutation.isSuccess}
                                required
                            />
                            <textarea className={css.formTextarea} name='message' placeholder={t("Home_block8_placeholder3")} disabled={mutation.isSuccess} required></textarea>
                            <Button fullWidth>
                                {t("Home_block8_button")}&nbsp;
                                <img className={css.formButtonArrow} src={arrow} alt="arrow" />
                            </Button>
                            {
                                mutation.isSuccess &&
                                <p>
                                    <AiFillCheckCircle/>
                                    &nbsp;
                                    {t("Home_block8_alert")}
                                </p>
                            }
                        </div>
                    </form>
                </CardContent>
            </Card>
        </Container>
    </div>
}