import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, ArrowRight, Wrench, TrendingUp, Phone, ExternalLink } from "lucide-react"
import Header from "@/components/header"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center">

        {/* ヒーローセクション */}
        <section className="w-full bg-gradient-to-r from-emerald-50 to-teal-50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
                中小企業・小規模事業者の業務を、
                <br />
                <span className="text-emerald-600">AIとSaaSでシンプルにする</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700">
                コールセンター・SaaS・DX支援で20年以上の現場経験を持つプロが、ハンズオンでサポートします
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                  <a href="https://calendly.com/taku_oono-node-bee/30min" target="_blank" rel="noopener noreferrer">
                    無料相談を予約する <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                  asChild
                >
                  <a href="#services">サービス詳細を見る</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 代表プロフィールセクション */}
        <section className="w-full py-16 bg-white" id="profile">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">代表プロフィール</h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
                {/* 写真・名前 */}
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src="/placeholder-user.jpg"
                      alt="代表社員 大野 拓"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-emerald-600 font-medium">代表社員</p>
                    <p className="text-xl font-bold text-gray-900">大野 拓（おおの たく）</p>
                    <p className="text-sm text-gray-500 mt-1">node-bee合同会社</p>
                  </div>
                </div>

                {/* 経歴・メッセージ */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">経歴</h3>
                    <ul className="space-y-3">
                      {[
                        {
                          period: "2000〜2010",
                          content: "人材派遣会社にてコールセンター立ち上げ（100名規模）・部門マネジメント（月商1,000〜5,000万円規模）",
                        },
                        {
                          period: "2010〜2017",
                          content: "通信関連企業にて営業組織マネジメント（50名規模）・支店長として入札案件営業・採用・現場運営を統括",
                        },
                        {
                          period: "2017〜2018",
                          content: "コールセンター運営企業にて営業・業務改善",
                        },
                        {
                          period: "2018〜2024",
                          content: "海外発SaaS企業の日本法人立ち上げに参画。サービスのローカライズ・営業・ブランディング・バックオフィス構築まで一貫して担当",
                        },
                        {
                          period: "2025",
                          content: "プログラミングスクール卒業（エンジニアリング習得）",
                        },
                        {
                          period: "2025〜現在",
                          content: "node-bee合同会社 設立・代表",
                        },
                      ].map((item, index) => (
                        <li key={index} className="flex gap-3">
                          <span className="text-emerald-600 font-medium text-sm whitespace-nowrap pt-0.5">{item.period}</span>
                          <span className="text-gray-600 text-sm">{item.content}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-emerald-50 p-5 rounded-lg border-l-4 border-emerald-500">
                    <p className="text-gray-700 italic leading-relaxed">
                      「AIやDXという言葉は広く知られるようになりましたが、実際にどう活用すればよいのかわからない企業がまだまだ多いのが現状です。私自身もキャリアの中で何度もゼロから立ち上げを経験してきました。その経験を活かして、難しい話は抜きに、今日から使える方法を一緒に考えます。」
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* プロダクト紹介セクション */}
        <section className="w-full py-16 bg-gray-50" id="products">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">私たちのプロダクト</h2>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="border-2 border-emerald-200 hover:border-emerald-400 transition-all shadow-sm hover:shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl text-emerald-700">WorkTrim</CardTitle>
                      <CardDescription className="mt-1 text-base">業務削減診断ツール</CardDescription>
                    </div>
                    <div className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">
                      無料・登録不要
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-base leading-relaxed">
                    3分で完了する業務削減診断ツール。10の質問に答えるだけで、削減できる業務時間・コスト・今すぐできる施策がわかります。登録不要・完全無料。
                  </p>
                  <Button className="bg-emerald-600 hover:bg-emerald-700 w-full sm:w-auto" asChild>
                    <a href="https://worktrim.vercel.app" target="_blank" rel="noopener noreferrer">
                      無料で診断する <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* サービス内容セクション */}
        <section className="w-full py-16 bg-white" id="services">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">サービス内容</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                現場経験をもとに、今すぐ動ける施策を一緒に考えます
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "AI・SaaSツール導入支援",
                  description:
                    "中小企業の業務に合ったツールを選定し、実際の設定・使い方まで一緒にハンズオンでサポート。freee、Notion、Slack、kintoneなど。",
                  icon: <Wrench className="h-12 w-12 text-emerald-500" />,
                },
                {
                  title: "業務改善コンサルティング",
                  description:
                    "現状の業務フローを整理し、どこをどう改善すればいいかをわかりやすく提案。難しいITの話は抜きに、すぐ動ける施策を提示。",
                  icon: <TrendingUp className="h-12 w-12 text-emerald-500" />,
                },
                {
                  title: "コンタクトセンター・DX支援",
                  description:
                    "コールセンターの立ち上げ・運用・DX化を一気通貫でサポート。20年以上の現場経験をもとに、システム導入・業務設計・運用改善まで対応。",
                  icon: <Phone className="h-12 w-12 text-emerald-500" />,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="mb-4 p-3 bg-emerald-50 rounded-full">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                <a href="https://calendly.com/taku_oono-node-bee/30min" target="_blank" rel="noopener noreferrer">
                  無料相談を予約する <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* 料金プランセクション */}
        <section className="w-full py-16 bg-gray-50" id="pricing">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">料金プラン</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">あなたのビジネス規模や課題に合わせて選べるプラン</p>
              <p className="mt-3 text-emerald-700 font-medium">まずは無料相談から。売り込みは一切しません。</p>
            </div>

            <Tabs defaultValue="monthly" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="monthly">月額プラン</TabsTrigger>
                <TabsTrigger value="yearly">年間プラン（2ヶ月分お得）</TabsTrigger>
              </TabsList>
              <TabsContent value="monthly">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      name: "スタート",
                      price: "9,800",
                      description: "AI活用に興味がある個人事業主・小規模事業者向け",
                      features: [
                        "有用な情報の定期配信",
                        "メールサポート（平日対応）",
                        "Slackなどでのテキストコミュニケーション",
                        "AI活用の基本的なアドバイス",
                      ],
                    },
                    {
                      name: "スタンダード",
                      price: "39,800",
                      description: "AI活用を始めたい小規模事業者向け",
                      features: [
                        "月1回のオンライン相談（60分）",
                        "AI活用診断レポート",
                        "基本的なAIツール導入サポート",
                        "メールサポート（平日対応）",
                        "Slackなどでのテキストコミュニケーション",
                      ],
                    },
                    {
                      name: "ビジネス",
                      price: "79,800",
                      description: "本格的なDX推進を目指す中小企業向け",
                      features: [
                        "月2回のオンライン相談（各60分）",
                        "詳細なAI/DX戦略立案",
                        "AI導入・運用サポート",
                        "社内トレーニング（月1回）",
                        "優先メールサポート（平日対応）",
                        "Slackなどでの優先テキストコミュニケーション",
                      ],
                      popular: true,
                    },
                  ].map((plan, index) => (
                    <Card
                      key={index}
                      className={`border-2 ${plan.popular ? "border-emerald-500 shadow-lg" : "border-gray-200"} relative`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 right-0 bg-emerald-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                          人気
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="text-xl">{plan.name}</CardTitle>
                        <CardDescription>{plan.description}</CardDescription>
                        <div className="mt-4">
                          <span className="text-3xl font-bold">¥{plan.price}</span>
                          <span className="text-gray-500 ml-1">/月（税抜）</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="yearly">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      name: "スタート",
                      price: "98,000",
                      description: "AI活用に興味がある個人事業主・小規模事業者向け",
                      features: [
                        "有用な情報の定期配信",
                        "メールサポート（平日対応）",
                        "Slackなどでのテキストコミュニケーション",
                        "AI活用の基本的なアドバイス",
                      ],
                    },
                    {
                      name: "スタンダード",
                      price: "397,800",
                      description: "AI活用を始めたい小規模事業者向け",
                      features: [
                        "月1回のオンライン相談（60分）",
                        "AI活用診断レポート",
                        "基本的なAIツール導入サポート",
                        "メールサポート（平日対応）",
                        "Slackなどでのテキストコミュニケーション",
                      ],
                    },
                    {
                      name: "ビジネス",
                      price: "798,000",
                      description: "本格的なDX推進を目指す中小企業向け",
                      features: [
                        "月2回のオンライン相談（各60分）",
                        "詳細なAI/DX戦略立案",
                        "AI導入・運用サポート",
                        "社内トレーニング（月1回）",
                        "優先メールサポート（平日対応）",
                        "Slackなどでの優先テキストコミュニケーション",
                      ],
                      popular: true,
                    },
                  ].map((plan, index) => (
                    <Card
                      key={index}
                      className={`border-2 ${plan.popular ? "border-emerald-500 shadow-lg" : "border-gray-200"} relative`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 right-0 bg-emerald-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                          人気
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="text-xl">{plan.name}</CardTitle>
                        <CardDescription>{plan.description}</CardDescription>
                        <div className="mt-4">
                          <span className="text-3xl font-bold">¥{plan.price}</span>
                          <span className="text-gray-500 ml-1">/年（税抜）</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                ※ 料金は税抜表示です。別途消費税がかかります。
                <br />※ カスタムプランも承っております。お気軽にご相談ください。
              </p>
              <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50" asChild>
                <a href="mailto:taku_oono@node-bee.com">
                  お問い合わせ
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* よくある質問セクション */}
        <section className="w-full py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">よくある質問</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">AI/DX導入に関するよくあるご質問にお答えします</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "AI導入に必要な専門知識がなくても大丈夫ですか？",
                    answer:
                      "はい、まったく問題ありません。私たちのサービスは、AI/DXの専門知識がない方でも安心して利用できるよう設計されています。ビジネス課題をお聞かせいただければ、最適なAI活用方法をご提案し、導入から運用までサポートします。",
                  },
                  {
                    question: "どのような業種に対応していますか？",
                    answer:
                      "製造業、小売業、サービス業、士業（税理士、弁護士など）など、幅広い業種に対応しています。業種ごとの特性や課題を理解した上で、最適なAI/DX活用方法をご提案します。",
                  },
                  {
                    question: "契約期間の縛りはありますか？",
                    answer:
                      "基本的には月単位でのご契約となりますが、最低3ヶ月からのご契約をお願いしております。AI/DXの導入効果を実感いただくためには、ある程度の期間が必要なためです。年間契約の場合は2ヶ月分お得になるプランもご用意しています。",
                  },
                  {
                    question: "自社に合うAIツールがわからないのですが、選定もサポートしてもらえますか？",
                    answer:
                      "もちろんです。現在市場にある多数のAIツールの中から、御社の課題解決に最適なものを選定し、導入方法までアドバイスします。また、複数のツールを組み合わせた最適なソリューションもご提案可能です。",
                  },
                  {
                    question: "導入後のサポート体制はどうなっていますか？",
                    answer:
                      "月額サブスクリプションの中に、定期的なオンライン相談が含まれています。導入後の運用状況の確認や新たな課題解決のアドバイス、最新AI技術の情報提供など、継続的にサポートします。また、プランによってはメールでのサポートも含まれています。",
                  },
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">その他のご質問がございましたら、お気軽にお問い合わせください。</p>
              <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50" asChild>
                <a href="mailto:taku_oono@node-bee.com">
                  メールでお問い合わせ
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* 無料相談セクション */}
        <section className="w-full py-16 bg-emerald-600">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">30分 無料相談</h2>
            <p className="text-lg text-emerald-100 max-w-2xl mx-auto mb-8">
              ツールの選び方から実際の設定まで、ハンズオンでサポートします。まずはお気軽にご相談ください。
            </p>
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 font-bold" asChild>
              <a href="https://calendly.com/taku_oono-node-bee/30min" target="_blank" rel="noopener noreferrer">
                今すぐ予約する <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>

        {/* 会社概要セクション */}
        <section className="w-full py-16 bg-white" id="company">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">会社概要</h2>
            </div>
            <div className="max-w-2xl mx-auto bg-gray-50 rounded-lg p-8">
              <dl className="space-y-4">
                {[
                  { dt: "社　名", dd: "node-bee合同会社" },
                  { dt: "代表者", dd: "大野　拓" },
                  { dt: "住　所", dd: "150-0044 東京都渋谷区円山町5番5号 Navi渋谷Ⅴ3階" },
                  { dt: "連絡先", dd: "taku_oono@node-bee.com" },
                ].map((item, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4">
                    <dt className="text-gray-500 font-medium">{item.dt}</dt>
                    <dd className="col-span-2 text-gray-800">{item.dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* フッター */}
        <footer className="w-full bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-bold mb-3 text-emerald-400">node-bee合同会社</h3>
                <p className="text-gray-400 text-sm">
                  中小企業・小規模事業者の業務を、AIとSaaSでシンプルにする
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">プロダクト</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://worktrim.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-emerald-400 text-sm flex items-center gap-1"
                    >
                      WorkTrim <ExternalLink className="h-3 w-3" />
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">お問い合わせ</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="mailto:taku_oono@node-bee.com" className="hover:text-emerald-400">
                      taku_oono@node-bee.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://calendly.com/taku_oono-node-bee/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-400"
                    >
                      無料相談を予約する
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
              <p>© {new Date().getFullYear()} node-bee合同会社 All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
