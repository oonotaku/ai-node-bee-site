"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-emerald-600">
              node-bee
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#services" className="text-gray-600 hover:text-emerald-600">
              サービス
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-emerald-600">
              料金プラン
            </Link>
            <Link href="#cases" className="text-gray-600 hover:text-emerald-600">
              導入事例
            </Link>
            <Link href="#company" className="text-gray-600 hover:text-emerald-600">
              会社概要
            </Link>
            <Button className="bg-emerald-600 hover:bg-emerald-700">無料相談を予約</Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-emerald-600">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="#services"
              className="block text-gray-600 hover:text-emerald-600"
              onClick={() => setIsMenuOpen(false)}
            >
              サービス
            </Link>
            <Link
              href="#pricing"
              className="block text-gray-600 hover:text-emerald-600"
              onClick={() => setIsMenuOpen(false)}
            >
              料金プラン
            </Link>
            <Link
              href="#cases"
              className="block text-gray-600 hover:text-emerald-600"
              onClick={() => setIsMenuOpen(false)}
            >
              導入事例
            </Link>
            <Link
              href="#company"
              className="block text-gray-600 hover:text-emerald-600"
              onClick={() => setIsMenuOpen(false)}
            >
              会社概要
            </Link>
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">無料相談を予約</Button>
          </div>
        </div>
      )}
    </header>
  )
}
