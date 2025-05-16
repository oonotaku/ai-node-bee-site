import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, ArrowRight, MessageCircle, BarChart, Zap, Users, Award } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* ヒーローセクション */}
      <section className="w-full bg-gradient-to-r from-emerald-50 to-teal-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
                AI/DXの導入で
                <br />
                <span className="text-emerald-600">中小企業の未来</span>を<br />
                切り拓きます
              </h1>
              <p className="text-lg md:text-xl text-gray-700">
                専門知識がなくても安心。あなたのビジネスに最適なAI活用方法を プロのアドバイザーがサポートします。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                  <a href="http://bit.ly/4kizgY3" target="_blank" rel="noopener noreferrer">
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
            <div className="relative h-64 md:h-96">
              <Image
                src="/placeholder-i162r.png"
                alt="AI/DXコンサルティングイメージ"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 課題提起セクション */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">こんなお悩みはありませんか？</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              多くの中小企業や士業の方々が、AI/DX導入に関して同じような課題を抱えています
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "何から始めればいいか分からない",
                description: "AI技術やDXに関する情報が多すぎて、自社に何が必要なのか判断できない",
                icon: <MessageCircle className="h-10 w-10 text-emerald-500" />,
              },
              {
                title: "専門知識を持つ人材がいない",
                description: "IT専門の社員がおらず、外部委託するにも何を依頼すべきか分からない",
                icon: <Users className="h-10 w-10 text-emerald-500" />,
              },
              {
                title: "コストと効果が見えない",
                description: "導入コストが高そうで、実際にどれくらいの効果があるのか不安",
                icon: <BarChart className="h-10 w-10 text-emerald-500" />,
              },
            ].map((item, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-emerald-100 transition-all">
                <CardHeader>
                  <div className="mb-2">{item.icon}</div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* サービス紹介セクション */}
      <section className="w-full py-16 bg-gray-50" id="services">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              「AI活用コンシェルジュ」が
              <br />
              あなたのビジネスを変えます
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              月額制のアドバイザーサービスで、AI/DX導入の悩みをすべて解決
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "専門知識不要",
                description: "AIやDXの専門知識がなくても、ビジネスの課題から最適な活用方法をご提案します",
                icon: <Zap className="h-12 w-12 text-emerald-500" />,
              },
              {
                title: "伴走型サポート",
                description: "導入から運用まで、あなたのペースに合わせて継続的にサポートします",
                icon: <Users className="h-12 w-12 text-emerald-500" />,
              },
              {
                title: "コスト削減と業務効率化",
                description: "無駄な投資を避け、本当に効果のある施策だけを厳選してご提案します",
                icon: <Award className="h-12 w-12 text-emerald-500" />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4 p-3 bg-emerald-50 rounded-full">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
              <a href="#services">
                サービスの詳細を見る <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* サービス詳細セクション */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">具体的なサポート内容</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              あなたのビジネスに合わせたAI/DX活用をトータルサポート
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <h3 className="text-2xl font-bold mb-4">AI/DX導入診断</h3>
            <p className="text-gray-600 mb-4">
              現状の業務フローを分析し、AI/DXによって改善できるポイントを洗い出します。
              無理な導入ではなく、本当に効果のある部分だけを厳選してご提案します。
            </p>
            <ul className="space-y-2">
              {["業務プロセスの可視化と分析", "AI/DX導入による効果予測", "優先順位付けとロードマップ作成"].map(
                (item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <h3 className="text-2xl font-bold mb-4">AI活用戦略立案</h3>
            <p className="text-gray-600 mb-4">
              あなたのビジネスの特性や課題に合わせた、具体的なAI活用戦略を立案します。
              ChatGPT、画像生成AI、業務自動化など、最適なツールと活用方法をご提案します。
            </p>
            <ul className="space-y-2">
              {["ビジネス目標に合わせたAI活用プラン", "具体的なツール選定と導入方法", "ROI（投資対効果）の試算"].map(
                (item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">継続的なサポートとトレーニング</h3>
            <p className="text-gray-600 mb-4">
              導入後も安心。定期的なミーティングで進捗を確認し、必要に応じて戦略の調整を行います。
              社内スタッフへのトレーニングも実施し、自走できる体制づくりをサポートします。
            </p>
            <ul className="space-y-2">
              {["月次進捗確認ミーティング", "AI活用スキルのトレーニング", "最新技術動向のアップデート提供"].map(
                (item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
              <a href="http://bit.ly/4kizgY3" target="_blank" rel="noopener noreferrer">
                無料相談を予約する <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 料金プランセクション */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">料金プラン</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">あなたのビジネス規模や課題に合わせて選べるプラン</p>
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
              <a href="https://forms.gle/x1eNpWjEsppDnxDt7" target="_blank" rel="noopener noreferrer">
                お問い合わせ
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 導入事例セクション */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">導入事例</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              様々な業種のお客様がAI活用コンシェルジュで業務改革を実現しています
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                company: "A社（税理士事務所）",
                title: "AIによる書類チェック自動化で作業時間を70%削減",
                description:
                  "確定申告の繁忙期に書類チェックに多くの時間を費やしていましたが、AIを活用した自動チェックシステムを導入。ミスの削減と大幅な時間短縮を実現しました。",
                results: ["書類チェック時間: 70%削減", "ミス発見率: 15%向上", "顧客対応時間: 40%増加"],
                image: "/placeholder-hcxhj.png",
              },
              {
                company: "B社（製造業）",
                title: "生産計画の最適化でコスト20%削減、納期遵守率向上",
                description:
                  "AIを活用した需要予測と生産計画の最適化システムを導入。原材料の無駄を減らし、納期遵守率を大幅に向上させました。",
                results: ["原材料コスト: 20%削減", "納期遵守率: 95%に向上", "生産計画作成時間: 80%削減"],
                image: "/placeholder-i66p4.png",
              },
            ].map((case_, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative h-48 md:h-full md:col-span-1">
                    <Image src={case_.image || "/placeholder.svg"} alt={case_.company} fill className="object-cover" />
                  </div>
                  <div className="p-6 md:col-span-2">
                    <p className="text-emerald-600 font-medium mb-2">{case_.company}</p>
                    <h3 className="text-xl font-bold mb-3">{case_.title}</h3>
                    <p className="text-gray-600 mb-4">{case_.description}</p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-medium mb-2">導入効果</p>
                      <ul className="space-y-1">
                        {case_.results.map((result, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
              <a href="http://bit.ly/4kizgY3" target="_blank" rel="noopener noreferrer">
                無料相談で自社の可能性を探る <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* よくある質問セクション */}
      <section className="w-full py-16 bg-gray-50">
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
                    "月額サブスクリプションの中に、定期的なオンライン相談が含まれています。導入後の運用状況の確認や新たな課題解決のアドバイス、最新AI技術の情報提供など、継続的にサポートします。また、プランによってはメールや電話でのサポートも含まれています。",
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
              <a href="https://forms.gle/x1eNpWjEsppDnxDt7" target="_blank" rel="noopener noreferrer">
                お問い合わせ
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 会社概要セクション */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">node-bee合同会社について</h2>
              <p className="text-gray-600 mb-6">
                node-bee合同会社は、中小企業や士業のAI/DX化を支援するプロフェッショナル集団です。
                技術の進化に取り残されがちな中小企業や個人事業主の方々が、最新のAI技術を活用して
                ビジネスを成長させるためのサポートを提供しています。
              </p>
              <p className="text-gray-600 mb-6">
                私たちの使命は、「テクノロジーの恩恵をすべてのビジネスに」。
                規模や業種を問わず、すべての企業がAI/DXの力を活用できる社会を目指しています。
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">代表メッセージ</h3>
                <p className="text-gray-600 italic">
                  「AIやDXという言葉は広く知られるようになりましたが、実際にどう活用すればよいのかわからない企業がまだまだ多いのが現状です。
                  私たちは、テクノロジーと経営の架け橋となり、中小企業や士業の皆様の成長をサポートします。」
                </p>
                <div className="mt-4 flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-3"></div>
                  <div>
                    <p className="font-medium">代表社員 大野　拓</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-64 md:h-96">
              <Image
                src="/professional-business-team.png"
                alt="node-bee合同会社チーム"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section className="w-full py-16 bg-emerald-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">まずは無料相談から</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              あなたのビジネスにAI/DXをどう活用できるか、プロのアドバイザーが無料でご相談に応じます
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <h3 className="text-xl font-bold mb-3">30分無料相談実施中</h3>
                <p className="text-gray-600 mb-4">
                  オンラインで気軽にご相談いただけます。AI/DXに関するお悩みや疑問にプロのアドバイザーがお答えします。
                </p>
                <ul className="space-y-2">
                  {[
                    "自社に合うAI活用法を知りたい",
                    "コスト削減につながる施策を知りたい",
                    "どこから始めればいいか相談したい",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-48 md:h-64">
                <Image src="/placeholder-5mwpb.png" alt="無料相談" fill className="object-contain" />
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                <a href="http://bit.ly/4kizgY3" target="_blank" rel="noopener noreferrer">
                  無料相談を予約する <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <p className="mt-4 text-sm text-gray-500">
                ※ 相談は完全予約制です。カレンダーから希望日時をお選びください。
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              メールでのお問い合わせ: <span className="font-medium">info@node-bee.co.jp</span>
            </p>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="w-full bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-center">会社情報</h3>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-300 font-medium">社　名:</p>
                  <p className="text-gray-400 mb-3">node-bee合同会社</p>

                  <p className="text-gray-300 font-medium">住　所:</p>
                  <p className="text-gray-400 mb-3">150-0044 東京都渋谷区円山町5番5号 Navi渋谷Ⅴ3階</p>
                </div>
                <div>
                  <p className="text-gray-300 font-medium">代表者:</p>
                  <p className="text-gray-400 mb-3">大野　拓</p>

                  <p className="text-gray-300 font-medium">連絡先:</p>
                  <p className="text-gray-400 mb-3">info@node-bee.co.jp</p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center text-gray-400">
              <p>© {new Date().getFullYear()} node-bee合同会社 All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
