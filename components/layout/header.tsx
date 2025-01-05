'use client'

import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import {ChevronDown, Menu} from 'lucide-react'
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible"
import {Button} from '@/components/ui/button'
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import {cn} from "@/lib/utils"

interface HeaderProps {
    width?: 'full' | 'container';
    showDropdownIcons?: boolean;
    isAlwaysOpaque?: boolean;
    serviceListAlignment?: 'right' | 'center';
    backgroundColor?: string;
    foregroundColor?: string;
}

const Header = ({
                    showDropdownIcons = false,
                    isAlwaysOpaque = false,
                    width = 'container',
                    serviceListAlignment = 'right',
                    backgroundColor = 'white',
                    foregroundColor = 'black',
                }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isServicesOpen, setIsServicesOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const headerStyle = {
        '--bg-color': backgroundColor,
        '--fg-color': foregroundColor,
    } as React.CSSProperties;

    const headerClasses = cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-200",
        {
            "bg-[var(--bg-color)]": isAlwaysOpaque || ( isScrolled && !isAlwaysOpaque),
            "bg-transparent": !isScrolled && !isAlwaysOpaque,
        }
    )

    const containerClasses = cn(
        "flex h-16 items-center",
        // {
        //     "w-full px-4": width === 'full',
        //     "container px-4 mx-auto": width === 'container',
        // },
        "container mx-auto max-w-6xl" // TODO 추가

    )

    const serviceListClasses = cn(
        "hidden md:flex items-center gap-8 text-lg font-medium whitespace-nowrap",
        {
            "justify-center": serviceListAlignment === 'center',
            "justify-end": serviceListAlignment === 'right'
        }
    )

    return (
        <>
            <header className={headerClasses} style={headerStyle}>
                <div className={containerClasses}>
                    <div className={cn("flex-1")}>
                        <Link href="/public" className={"flex items-center space-x-2"}>
                            <span className="font-bold text-xl text-[var(--fg-color)]">MyLogo</span>
                        </Link>
                    </div>
                    <div className={"flex-1"}>
                    <nav className={serviceListClasses}>
                        <Link href="/public"
                              className="transition-colors hover:text-[var(--fg-color)]/80 text-[var(--fg-color)] relative group">
                            About
                            <span
                                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--fg-color)] transition-all group-hover:w-full"></span>
                        </Link>
                        <div className="relative group">
                            <button
                                className="transition-colors hover:text-[var(--fg-color)]/80 text-[var(--fg-color)]/60 flex items-center relative whitespace-nowrap">
                                회사소개
                                {showDropdownIcons && <ChevronDown className="ml-1 h-4 w-4"/>}
                                <span
                                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--fg-color)] transition-all group-hover:w-full"></span>
                            </button>
                            <div
                                className="absolute -translate-x-1/2 left-1/2 mt-2 w-48 rounded-md shadow-lg bg-[var(--bg-color)] ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform group-hover:translate-y-1">
                                <div className="py-1" role="menu" aria-orientation="vertical"
                                     aria-labelledby="options-menu">
                                    <Link href="/services/web"
                                          className="block px-4 py-3 text-sm hover:text-[var(--fg-color)]/80 text-[var(--fg-color)]/60 transition-colors duration-200"
                                          role="menuitem">인사말 </Link>
                                    <Link href="/services/mobile"
                                          className="block px-4 py-3 text-sm hover:text-[var(--fg-color)]/80 text-[var(--fg-color)]/60 transition-colors duration-200"
                                          role="menuitem">구성원</Link>
                                    <Link href="/services/consulting"
                                          className="block px-4 py-3 text-sm hover:text-[var(--fg-color)]/80 text-[var(--fg-color)]/60 transition-colors duration-200"
                                          role="menuitem">연혁</Link>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <button
                                className="transition-colors hover:text-[var(--fg-color)]/80 text-[var(--fg-color)]/60 flex items-center relative whitespace-nowrap">
                                제품소개
                                {showDropdownIcons && <ChevronDown className="ml-1 h-4 w-4"/>}
                                <span
                                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--fg-color)] transition-all group-hover:w-full"></span>
                            </button>
                            <div
                                className="absolute -translate-x-1/2 left-1/2 mt-2 w-64 rounded-md shadow-lg bg-[var(--bg-color)] ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform group-hover:translate-y-1">
                                <div className="py-1" role="menu" aria-orientation="vertical"
                                     aria-labelledby="options-menu">
                                    <Link href="#"
                                          className="block px-4 py-3 text-sm hover:text-[var(--fg-color)]/80 text-[var(--fg-color)]/60 transition-colors duration-200"
                                          role="menuitem">제품소개1</Link>
                                    <Link href="#"
                                          className="block px-4 py-3 text-sm hover:text-[var(--fg-color)]/80 text-[var(--fg-color)]/60 transition-colors duration-200"
                                          role="menuitem">제품소개2</Link>
                                    <Link href="#"
                                          className="block px-4 py-3 text-sm hover:text-[var(--fg-color)]/80 text-[var(--fg-color)]/60 transition-colors duration-200"
                                          role="menuitem">제품소개3</Link>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <button
                                className="transition-colors hover:text-[var(--fg-color)]/80 text-[var(--fg-color)]/60 flex items-center relative whitespace-nowrap">
                                고객지원
                                {showDropdownIcons && <ChevronDown className="ml-1 h-4 w-4"/>}
                                <span
                                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--fg-color)] transition-all group-hover:w-full"></span>
                            </button>
                            <div
                                className="absolute -translate-x-1/2 left-1/2 mt-2 w-64 rounded-md shadow-lg bg-[var(--bg-color)] ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform group-hover:translate-y-1">
                                <div className="py-1" role="menu" aria-orientation="vertical"
                                     aria-labelledby="options-menu">
                                    <Link href="#"
                                          className="block px-4 py-3 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 text-[var(--fg-color)] transition-colors duration-200"
                                          role="menuitem">공지사항</Link>
                                    <Link href="#"
                                          className="block px-4 py-3 text-sm hover:text-[var(--fg-color)]/80 text-[var(--fg-color)]/60 transition-colors duration-200"
                                          role="menuitem">Q&A</Link>
                                    <Link href="#"
                                          className="block px-4 py-3 text-sm hover:text-[var(--fg-color)]/80 text-[var(--fg-color)]/60 transition-colors duration-200"
                                          role="menuitem">문의하기</Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                    </div>
                    {serviceListAlignment === "center" && <div className={cn("flex-1 flex items-center justify-end")}>
                        <Button variant="outline" size="sm" className="mr-4">
                            Contact Us
                        </Button>
                    </div>
                    }

                    {/*반응형 모바일*/}
                    <div className="md:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Menu className="h-5 w-5"/>
                                    <span className="sr-only">메뉴 열기</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right"
                                          style={{backgroundColor: 'var(--bg-color)', color: 'var(--fg-color)'}}>
                                <nav className="flex flex-col space-y-4">
                                    <Link href="/public" className="text-xl font-medium text-[var(--fg-color)]"
                                          onClick={() => setIsOpen(false)}>
                                        홈
                                    </Link>
                                    <Link href="/public" className="text-xl font-medium text-[var(--fg-color)]"
                                          onClick={() => setIsOpen(false)}>
                                        소개
                                    </Link>
                                    <Collapsible
                                        open={isServicesOpen}
                                        onOpenChange={setIsServicesOpen}
                                    >
                                        <CollapsibleTrigger
                                            className="flex items-center justify-between w-full text-xl font-medium text-[var(--fg-color)]">
                                            서비스
                                            {showDropdownIcons && <ChevronDown className="h-5 w-4"/>}
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <ul className="pl-4 mt-2 space-y-2">
                                                <li>
                                                    <Link href="/services/web"
                                                          className="block text-lg text-[var(--fg-color)]"
                                                          onClick={() => setIsOpen(false)}>
                                                        웹 개발
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/mobile"
                                                          className="block text-lg text-[var(--fg-color)]"
                                                          onClick={() => setIsOpen(false)}>
                                                        모바일 앱
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/consulting"
                                                          className="block text-lg text-[var(--fg-color)]"
                                                          onClick={() => setIsOpen(false)}>
                                                        컨설팅
                                                    </Link>
                                                </li>
                                            </ul>
                                        </CollapsibleContent>
                                    </Collapsible>
                                    <Link href="/contact" className="text-xl font-medium text-[var(--fg-color)]"
                                          onClick={() => setIsOpen(false)}>
                                        연락처
                                    </Link>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </header>
            {/* todo 배경 가릴건지 안가릴건지 풀스크린으로 하면 슬라이드부분이 가려짐 */}
            <div className={isAlwaysOpaque ? 'h-16' : ''}></div>
        </>
    )
}

export default Header

