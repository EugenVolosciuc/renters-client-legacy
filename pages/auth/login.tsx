import type { NextPage } from 'next'
import Link from 'next/link'
import { Row, Col, Typography } from 'antd'

import LoginForm from 'components/forms/Login'
import AuthLayout from 'components/layouts/AuthLayout'
import { useAuthRedirect } from 'store/auth/useAuthRedirect'
import styles from 'styles/pages/AuthPages.module.less'

const { Title, Text, Link: AntLink } = Typography

const leftColumnContent = (
    <Row className={styles['form-container-row']} justify="center" align="middle">
        <Col xs={18} sm={14} md={10} lg={14} xl={10} className={styles['form-container-col']}>
            <Title level={3} className={styles['login-text']}>Login</Title>
            <LoginForm />
            <Text>
                Don&apos;t have an account yet? Create one 
                <Link href="/auth/signup" passHref>
                    <AntLink> here!</AntLink>
                </Link>
            </Text>
        </Col>
    </Row>
)

const rightColumnContent = (<></>)

const Login: NextPage = () => {
    useAuthRedirect(false)

    return (
        <AuthLayout leftColumnContent={leftColumnContent} rightColumnContent={rightColumnContent}
        />
    )
}

export default Login