"use client"

import { useState } from "react"
import { Sun, Moon, Github, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="dark:bg-slate-900 bg-slate-50 min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-300">
        {/* Header */}
        <header className="sticky top-0 z-10 backdrop-blur-md bg-slate-100/80 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">yabo / Hayato Yabusaki</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="font-medium hover:text-primary transition-colors">
                HOME
              </a>
              <a href="#" className="font-medium hover:text-primary transition-colors">
                ABOUT
              </a>
              <a href="#" className="font-medium hover:text-primary transition-colors">
                PROJECTS
              </a>
              <a href="#" className="font-medium hover:text-primary transition-colors">
                ARTICLES
              </a>
              <a href="#" className="font-medium hover:text-primary transition-colors">
                BLOG
              </a>
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="ml-2">
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </nav>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleTheme}>
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 md:py-24 container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_2fr] gap-8 items-center">
            <div className="flex flex-col items-center md:items-start">
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 p-1">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Hayato Yabusaki"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full p-2">
                  <Badge className="bg-primary hover:bg-primary/90">QA</Badge>
                </div>
              </div>
              <h1 className="text-3xl font-bold mt-4">yabo</h1>
              <p className="text-xl text-muted-foreground">Hayato Yabusaki</p>
              <div className="flex gap-3 mt-4">
                <Button variant="outline" size="icon">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="text-center md:text-left space-y-6">
              <div className="space-y-2">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent inline-flex items-center gap-2">
                  Quality Assurance Engineer <span className="text-3xl">✏️</span>
                </h2>
                <p className="text-xl text-muted-foreground">品質とスピードを両立し、価値あるプロダクトを届けます✨</p>
              </div>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Button className="rounded-full">プロフィールを見る</Button>
                <Button variant="outline" className="rounded-full">
                  プロジェクトを見る
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 bg-slate-100/50 dark:bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Skills</h2>
                <p className="text-muted-foreground text-lg">QA＆Platform/Enabling Teamにする手伝いをしています🚀</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm hover:shadow-md transition-all">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <span className="bg-primary/10 text-primary p-2 rounded-md">🧪</span>
                      QA・テスト支援
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Badge variant="outline">組織のQA・テスト戦略策定</Badge>
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge variant="outline">ATDDに基づくQAプロセス導入</Badge>
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge variant="outline">アジャイルQA知識のレクチャ</Badge>
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge variant="outline">Devチームのテストレビュー</Badge>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm hover:shadow-md transition-all">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <span className="bg-primary/10 text-primary p-2 rounded-md">🤖</span>
                      テスト自動化
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Badge variant="outline">ツール選定・導入</Badge>
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge variant="outline">API/E2E自動テスト実装・運用</Badge>
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge variant="outline">CI/CDパイプライン構築</Badge>
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge variant="outline">非機能テスト自動化</Badge>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm hover:shadow-md transition-all">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <span className="bg-primary/10 text-primary p-2 rounded-md">👥</span>
                      チームリーディング
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Badge variant="outline">チームMVV/OKR設定</Badge>
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge variant="outline">開発プロジェクトマネジメント</Badge>
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge variant="outline">チーム内勉強会の主催</Badge>
                      </li>
                      <li className="flex items-center gap-2">
                        <Badge variant="outline">社外発信・登壇</Badge>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 border-t border-slate-200 dark:border-slate-700">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Hayato Yabusaki. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

