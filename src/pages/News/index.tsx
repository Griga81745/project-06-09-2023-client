import PageLayout from '../../components/PageLayout'
import WrapperFirstBlock from '../../components/WrapperFirstBlock'

import Block1 from './Block1'


export default function Page() {
    return <PageLayout
        title='News'
    >
        <WrapperFirstBlock>
            <Block1/>
        </WrapperFirstBlock>
    </PageLayout>
}