import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Row, Col, Typography } from 'antd'

import LoginForm from 'components/forms/Login'
import AuthLayout from 'components/layouts/AuthLayout'
import { useAuthRedirect } from 'store/user/useAuthRedirect'
import styles from 'styles/pages/AuthPages.module.less'

const { Title, Text, Link: AntLink } = Typography

const Login = (_props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    useAuthRedirect(false)
    const { t } = useTranslation()

    const leftColumnContent = (
        <Row className={styles['form-container-row']} justify="center" align="middle">
            <Col xs={20} sm={14} md={10} lg={16} xl={12} xxl={10} className={styles['form-container-col']}>
                <Title level={3} className={styles['login-text']}>
                    {t('auth:login')}
                </Title>
                <LoginForm />
                <Text>
                    {t('auth:no-account-create-account')}
                    {' '}
                    <Link href="/auth/signup" passHref>
                        <AntLink>{t('auth:here')}!</AntLink>
                    </Link>
                </Text>
            </Col>
        </Row>
    )

    const rightColumnContent = (<></>)

    return (
        <AuthLayout leftColumnContent={leftColumnContent} rightColumnContent={rightColumnContent} />
    )
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const { locale } = context
    
    return {
        props: {
            ...(await serverSideTranslations(
                locale as string,
                ['common', 'auth']
            ))
        }
    }
}

export default Login
