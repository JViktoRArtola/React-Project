import Image from 'next/image'
import Link from 'next/link'
import cookieImage from '../../../public/images/common/cookie.svg'
import BlueButton from './BlueButton'
import { useEffect, useState } from 'react'
import Router from 'next/router'

export default function CookieClickerPopup({}) {
    const [showPopup, setShowPopup] = useState(false)

    useEffect(() => {
        const cookie = JSON.parse(localStorage.getItem('alldone_cookie'))
        if (!cookie || !cookie.cookiesEnabled) {
            setShowPopup(true)
        }
    }, [Router.pathname])

    const acceptCookies = () => {
        setShowPopup(false)
        const cookie = JSON.parse(localStorage.getItem('alldone_cookie')) || {}
        cookie.cookiesEnabled = true
        // set cookie in localStorage
        localStorage.setItem('alldone_cookie', JSON.stringify(cookie))
    }

    return showPopup ? (
        <div
            className={
                'absolute top-0 left-0 w-full h-full z-[10000] bg-Text03 bg-opacity-[0.24] content-end items-center'
            }
        >
            <div className={'absolute top-0 left-0 w-full h-full z-[10100] cursor-pointer'} onClick={acceptCookies} />
            <div
                className={
                    'fixed bottom-16 left-1/2 transform -translate-x-1/2 items-center max-w-[944px] min-w-[280px] z-[11000] bg-white p-4 rounded-lg drop-shadow-square-card'
                }
            >
                <div className={'flex flex-row self-start mb-4'}>
                    <Image src={cookieImage} alt="Cookie" priority={true} />
                    <h2 className={'text-2xl font-medium text-Text01 ml-2'}>Cookies & Privacy</h2>
                </div>
                <div className={'mb-4'}>
                    <p className={'text-base font-normal text-Text02'}>
                        We use cookies to ensure you have the best user experience. If you continue, we'll assume that
                        you are happy to receive all cookies on Alldone.app. However, if you would like to know more
                        about it visit out{' '}
                        <Link href="/impressum">
                            <a className={'text-Primary100'} onClick={acceptCookies}>
                                Impressum
                            </a>
                        </Link>
                        {', '}
                        <Link href="/privacy">
                            <a className={'text-Primary100'} onClick={acceptCookies}>
                                Privacy Policy
                            </a>
                        </Link>
                        {' and '}
                        <Link href="/terms">
                            <a className={'text-Primary100'} onClick={acceptCookies}>
                                Terms of Service
                            </a>
                        </Link>{' '}
                        pages.
                    </p>
                </div>
                <div className={'flex flex-row justify-center'}>
                    <BlueButton
                        title={'I am happy with this'}
                        onClick={acceptCookies}
                        customClass={'px-4 py-[7px] text-lg max-h-[40px]'}
                    />
                </div>
            </div>
        </div>
    ) : null
}
