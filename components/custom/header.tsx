'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu, ChevronDown } from 'lucide-react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useAtom } from 'jotai'
import { isOpenAtom, isServicesOpenAtom } from '@/store/headerAtoms'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet'

const Header = () => {
    const [isOpen, setIsOpen] = useAtom(isOpenAtom)
    const [isServicesOpen, setIsServicesOpen] = useAtom(isServicesOpenAtom)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center justify-between">
                <Link href="/public" className="flex items-center space-x-2">
                    <span className="font-bold">MyLogo</span>
                </Link>
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium ml-auto">
                    <Link href="/public" className="transition-colors hover:text-foreground/80 text-foreground">
                        홈
                    </Link>
                    <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
                        소개
                    </Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="transition-colors hover:text-foreground/80 text-foreground/60">
                            서비스 <ChevronDown className="inline-block ml-1 h-4 w-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>
                                <Link href="/services/web">웹 개발</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/services/mobile">모바일 앱</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/services/consulting">컨설팅</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Link href="/contact" className="transition-colors hover:text-foreground/80 text-foreground/60">
                        연락처
                    </Link>
                </nav>
                <div className="flex md:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">메뉴 열기</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <nav className="flex flex-col space-y-4">
                                <Link href="/public" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                                    홈
                                </Link>
                                <Link href="/about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                                    소개
                                </Link>
                                <Collapsible
                                    open={isServicesOpen}
                                    onOpenChange={setIsServicesOpen}
                                >
                                    <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-medium">
                                        서비스
                                        <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'transform rotate-180' : ''}`} />
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <ul className="pl-4 mt-2 space-y-2">
                                            <li>
                                                <Link href="/services/web" className="block" onClick={() => setIsOpen(false)}>
                                                    웹 개발
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/services/mobile" className="block" onClick={() => setIsOpen(false)}>
                                                    모바일 앱
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/services/consulting" className="block" onClick={() => setIsOpen(false)}>
                                                    컨설팅
                                                </Link>
                                            </li>
                                        </ul>
                                    </CollapsibleContent>
                                </Collapsible>
                                <Link href="/contact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                                    연락처
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

export default Header;
