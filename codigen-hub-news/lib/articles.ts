// This file contains functions to fetch and manage article data
// In a real application, this would connect to a database or CMS

// Types
export type Article = {
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  date: string
  author: string
  category: string
}

export type Category = {
  slug: string
  name: string
  description: string
  articleCount: number
}

// Sample articles data
const articles: Article[] = [
  {
    slug: "the-future-of-ai-development",
    title: "The Future of AI Development",
    excerpt:
      "Exploring the latest trends and innovations in artificial intelligence and what they mean for the future of technology.",
    content: `Artificial intelligence continues to evolve at a rapid pace, transforming industries and creating new possibilities for innovation. Recent advancements in machine learning algorithms have enabled AI systems to perform tasks that were once thought to be exclusively human domains.

    One of the most significant developments is the emergence of generative AI models that can create content, from text to images and even code. These models are becoming increasingly sophisticated, with the ability to understand context and generate outputs that are often indistinguishable from human-created content.

    The integration of AI into everyday applications is also accelerating. From virtual assistants that can understand and respond to natural language queries to recommendation systems that personalize content based on user preferences, AI is becoming an integral part of our digital experience.

    However, as AI becomes more powerful, questions about ethics, bias, and regulation become more pressing. Ensuring that AI systems are developed and deployed responsibly is a challenge that requires collaboration between technologists, policymakers, and society at large.

    The future of AI development will likely be shaped by these considerations, as well as by continued advances in computing power and algorithm design. As we move forward, the goal will be to harness the potential of AI to solve complex problems while mitigating risks and ensuring that the benefits are widely shared.`,
    coverImage: "/images/ai-future.jpg",
    date: "2023-04-15T10:00:00Z",
    author: "Dr. Sarah Chen",
    category: "Technology",
  },
  {
    slug: "sustainable-business-practices",
    title: "Sustainable Business Practices for the Modern Enterprise",
    excerpt:
      "How companies are incorporating sustainability into their operations and the impact on their bottom line.",
    content: `Sustainability has moved from a peripheral concern to a central business imperative for modern enterprises. Companies across industries are recognizing that sustainable practices are not just good for the planet but can also drive innovation, reduce costs, and enhance brand reputation.

    Many businesses are setting ambitious targets for reducing their carbon footprint and minimizing waste. This includes transitioning to renewable energy sources, optimizing supply chains to reduce emissions, and redesigning products and packaging to be more environmentally friendly.

    The concept of the circular economy is gaining traction, with companies looking for ways to reuse materials and extend the lifecycle of products. This approach not only reduces waste but can also create new revenue streams and business models.

    Investors are increasingly considering environmental, social, and governance (ESG) factors in their decision-making, putting pressure on companies to improve their sustainability performance. This trend is likely to accelerate as regulatory requirements around sustainability reporting become more stringent.

    Leading companies are finding that sustainability can be a source of competitive advantage. By integrating sustainable thinking into their strategy and operations, they are able to identify new opportunities, mitigate risks, and build stronger relationships with customers, employees, and other stakeholders.

    As we move forward, the businesses that thrive will be those that can balance economic, environmental, and social considerations in a way that creates value for all stakeholders.`,
    coverImage: "/images/sustainable-business.jpg",
    date: "2023-04-10T14:30:00Z",
    author: "Michael Rodriguez",
    category: "Business",
  },
  {
    slug: "breakthrough-in-quantum-computing",
    title: "Major Breakthrough in Quantum Computing Research",
    excerpt:
      "Scientists announce a significant advancement in quantum computing technology that could revolutionize data processing.",
    content: `Quantum computing has taken a major leap forward with researchers announcing a breakthrough that could accelerate the development of practical quantum computers. The team has successfully demonstrated a new method for maintaining quantum coherence, one of the biggest challenges in quantum computing.

    Traditional computers use bits that represent either a 0 or a 1, but quantum computers use quantum bits, or qubits, which can exist in multiple states simultaneously thanks to the principles of quantum mechanics. This property, known as superposition, gives quantum computers the potential to solve certain problems much faster than classical computers.

    However, qubits are extremely sensitive to their environment, and even minor disturbances can cause them to lose their quantum properties, a phenomenon known as decoherence. The new research has found a way to protect qubits from decoherence for significantly longer periods, potentially making quantum computers more stable and reliable.

    The implications of this breakthrough are far-reaching. Quantum computers have the potential to revolutionize fields such as cryptography, drug discovery, materials science, and optimization problems. They could enable the simulation of complex molecular interactions, leading to the development of new medicines and materials with specific properties.

    While there are still many challenges to overcome before quantum computers become widely available, this research represents a significant step forward. It brings us closer to a future where quantum computing can help solve some of the world's most complex problems.`,
    coverImage: "/images/quantum-computing.jpg",
    date: "2023-04-05T09:15:00Z",
    author: "Dr. James Wilson",
    category: "Science",
  },
  {
    slug: "advancements-in-renewable-energy",
    title: "Advancements in Renewable Energy Technology",
    excerpt: "New developments in solar and wind energy are making renewable sources more efficient and accessible.",
    content: `The renewable energy sector is experiencing rapid innovation, with new technologies making clean energy more efficient, affordable, and accessible. These advancements are crucial for addressing climate change and transitioning to a low-carbon economy.

    Solar energy has seen significant improvements in efficiency and cost. The latest generation of solar panels can convert a higher percentage of sunlight into electricity, and manufacturing costs have decreased dramatically. This has made solar power competitive with fossil fuels in many markets, even without subsidies.

    Wind energy is also advancing, with larger and more efficient turbines being developed. Offshore wind farms, in particular, are becoming more viable as technology improves and costs decrease. These installations can take advantage of stronger and more consistent winds over the ocean.

    Energy storage solutions are evolving to address the intermittent nature of renewable sources. Batteries are becoming more powerful, longer-lasting, and less expensive, making it possible to store excess energy generated during peak production times for use when the sun isn't shining or the wind isn't blowing.

    Grid management systems are becoming smarter, using artificial intelligence and advanced analytics to balance supply and demand in real-time. This enables the integration of higher percentages of renewable energy into the grid without compromising reliability.

    These technological advancements, combined with supportive policies and growing investment, are accelerating the transition to renewable energy. As these trends continue, we can expect to see renewable sources playing an increasingly dominant role in the global energy mix.`,
    coverImage: "/images/renewable-energy.jpg",
    date: "2023-04-01T11:45:00Z",
    author: "Emma Thompson",
    category: "Science",
  },
  {
    slug: "mental-health-in-the-workplace",
    title: "Addressing Mental Health in the Modern Workplace",
    excerpt: "Companies are implementing new strategies to support employee mental health and well-being.",
    content: `Mental health has become a priority for forward-thinking organizations as they recognize the impact it has on employee well-being, productivity, and retention. The modern workplace is evolving to address mental health concerns more effectively and reduce the stigma associated with seeking help.

    Many companies are expanding their benefits packages to include comprehensive mental health services, such as therapy sessions, counseling, and stress management programs. Some are offering digital mental health platforms that provide employees with resources and support that can be accessed anytime, anywhere.

    Flexible work arrangements, including remote work options and flexible hours, are being implemented to help employees achieve better work-life balance. This flexibility can reduce stress and prevent burnout, which are significant contributors to mental health issues.

    Training programs for managers are focusing on recognizing signs of mental health struggles and responding appropriately. By equipping leaders with the knowledge and skills to support their team members, organizations can create a more supportive environment.

    Open conversations about mental health are being encouraged to reduce stigma and normalize seeking help. Companies are hosting workshops, panel discussions, and awareness campaigns to educate employees and create a culture of understanding and support.

    As the connection between mental health and overall well-being becomes more widely recognized, we can expect to see continued innovation in workplace mental health initiatives. Organizations that prioritize mental health are likely to see benefits in terms of employee satisfaction, productivity, and retention.`,
    coverImage: "/images/mental-health.jpg",
    date: "2023-03-28T13:20:00Z",
    author: "Dr. Lisa Johnson",
    category: "Health",
  },
  {
    slug: "streaming-services-competition",
    title: "The Intensifying Competition Among Streaming Services",
    excerpt: "How the battle for subscribers is reshaping the entertainment industry and affecting content creation.",
    content: `The streaming landscape has become increasingly competitive as more companies enter the market and existing players expand their offerings. This intense competition is reshaping the entertainment industry and changing how content is created, distributed, and consumed.

    Major streaming platforms are investing billions in original content to differentiate themselves and attract subscribers. This has led to a golden age of television and film production, with high-quality shows and movies being created specifically for streaming audiences.

    The battle for exclusive rights to popular existing content is also heating up. Streaming services are willing to pay premium prices for the rights to beloved shows and movies that have proven audience appeal.

    Pricing strategies are evolving as competition intensifies. Some services are offering lower-cost, ad-supported tiers to reach price-sensitive consumers, while others are bundling streaming with other products and services to provide more value.

    International expansion has become a key growth strategy for streaming platforms. They are investing in local content production and adapting their offerings to suit different markets and cultural preferences.

    The fragmentation of content across multiple platforms is leading to "subscription fatigue" among consumers, who are becoming more selective about which services they pay for. This is putting pressure on streaming companies to continuously demonstrate their value proposition.

    As the streaming wars continue, we can expect to see further consolidation, innovation, and evolution in business models. The winners will likely be those who can consistently deliver compelling content while managing costs and adapting to changing consumer preferences.`,
    coverImage: "/images/streaming-services.jpg",
    date: "2023-03-25T16:10:00Z",
    author: "Alex Martinez",
    category: "Entertainment",
  },
  {
    slug: "evolution-of-esports",
    title: "The Evolution of Esports: From Niche to Mainstream",
    excerpt:
      "How competitive gaming has grown into a global phenomenon with professional leagues and massive audiences.",
    content: `Esports has undergone a remarkable transformation, evolving from a niche interest to a global phenomenon with professional leagues, celebrity players, and massive audiences. This growth has been driven by technological advancements, changing entertainment preferences, and significant investment.

    The professionalization of esports has accelerated in recent years, with structured leagues, franchises, and substantial prize pools. Major tournaments now offer millions of dollars in prizes, attracting top talent and raising the level of competition.

    Viewership for esports events has exploded, with millions of fans watching online and, increasingly, on traditional television networks. The audience demographics are expanding beyond the stereotypical young male gamer to include a more diverse range of viewers.

    Investment in the esports ecosystem has grown dramatically, with traditional sports teams, media companies, and venture capital firms pouring money into teams, leagues, and related businesses. This has helped to legitimize esports and provide the resources needed for further growth.

    The line between traditional sports and esports is blurring, with many traditional sports organizations creating their own esports teams and competitions. This convergence is helping to bring esports to new audiences and create synergies between different forms of competition.

    As esports continues to mature, we can expect to see further integration with mainstream entertainment, more sophisticated business models, and continued innovation in how competitions are organized and presented. The future of esports looks bright, with the potential to become one of the dominant forms of entertainment in the digital age.`,
    coverImage: "/images/esports.jpg",
    date: "2023-03-20T10:30:00Z",
    author: "Ryan Park",
    category: "Sports",
  },
  {
    slug: "impact-of-5g-technology",
    title: "The Transformative Impact of 5G Technology",
    excerpt:
      "How the fifth generation of wireless technology is enabling new applications and changing how we connect.",
    content: `The rollout of 5G networks is ushering in a new era of connectivity, with the potential to transform industries and enable new applications that weren't possible with previous generations of wireless technology. The higher speeds, lower latency, and increased capacity of 5G are opening up exciting possibilities.

    One of the most significant impacts of 5G will be on the Internet of Things (IoT). The ability to connect many more devices simultaneously and with minimal delay will accelerate the adoption of smart devices in homes, cities, and industries.

    Autonomous vehicles will benefit from the low latency of 5G, which allows for real-time communication between vehicles, infrastructure, and control systems. This could improve safety and efficiency in transportation.

    Healthcare is another area where 5G could have a transformative impact. Remote surgery, real-time monitoring of patients, and telemedicine will all be enhanced by the capabilities of 5G networks.

    Entertainment and media will evolve with 5G, enabling more immersive experiences through augmented and virtual reality. The high bandwidth and low latency of 5G make these technologies more practical for everyday use.

    Manufacturing and industry will become more efficient with 5G-enabled automation and real-time monitoring. The ability to collect and analyze data from many sensors simultaneously can lead to significant improvements in productivity.

    As 5G networks continue to expand and mature, we can expect to see new applications and use cases emerge that take advantage of this powerful technology. The full impact of 5G is likely to be even more significant than we can currently imagine.`,
    coverImage: "/images/5g-technology.jpg",
    date: "2023-03-15T14:00:00Z",
    author: "Sophia Lee",
    category: "Technology",
  },
  {
    slug: "future-of-remote-work",
    title: "The Future of Remote Work: Trends and Predictions",
    excerpt:
      "How the pandemic-accelerated shift to remote work is evolving and what it means for businesses and employees.",
    content: `The COVID-19 pandemic accelerated the adoption of remote work, forcing organizations to quickly adapt to a new way of operating. As we move beyond the immediate crisis, the future of work is taking shape, with remote and hybrid models becoming a permanent feature of the business landscape.

    Many companies are adopting hybrid work models that combine in-office and remote work. This approach aims to capture the benefits of both environments: the collaboration and culture-building of in-person work and the flexibility and focus of remote work.

    Technology continues to evolve to support remote collaboration, with virtual reality, augmented reality, and other immersive technologies promising to make remote interactions more engaging and effective. These tools could help address some of the challenges of remote work, such as building relationships and fostering creativity.

    The geographic distribution of talent is changing as remote work becomes more common. Companies are able to hire from a wider pool of candidates, and employees have more freedom to choose where they live. This is leading to shifts in population patterns and real estate markets.

    Management practices are adapting to the realities of remote and hybrid work. Leaders are focusing more on outcomes rather than hours worked, and developing new skills for managing distributed teams effectively.

    The implications for workplace culture are significant, with organizations working to maintain cohesion and shared values across distributed teams. This requires intentional effort and new approaches to communication, onboarding, and team building.

    As remote work continues to evolve, we can expect to see further innovation in tools, practices, and policies. The organizations that thrive will be those that can create effective and inclusive work environments regardless of physical location.`,
    coverImage: "/images/remote-work.jpg",
    date: "2023-03-10T09:45:00Z",
    author: "David Kim",
    category: "Business",
  },
  // Add more articles as needed to reach 50+ for testing
  {
    slug: "advances-in-machine-learning",
    title: "Recent Advances in Machine Learning Algorithms",
    excerpt: "Exploring the latest breakthroughs in machine learning and their potential applications.",
    content: `Machine learning continues to advance at a rapid pace, with new algorithms and techniques being developed that push the boundaries of what's possible. These advances are enabling more sophisticated applications and opening up new possibilities for AI.

    Deep learning, a subset of machine learning that uses neural networks with many layers, has seen particularly significant progress. Techniques like transfer learning, where models trained on one task are adapted for another, are making it possible to achieve good results with less data and computational resources.

    Reinforcement learning, where agents learn by interacting with an environment and receiving rewards or penalties, has achieved remarkable results in areas like game playing and robotics. Recent advances in this field are making it more applicable to real-world problems.

    Federated learning, which allows models to be trained across multiple devices or servers without exchanging the underlying data, is addressing privacy concerns and enabling new applications in sensitive domains like healthcare.

    Explainable AI is another area of focus, with researchers developing methods to make the decisions of complex models more transparent and interpretable. This is crucial for building trust and ensuring that AI systems are fair and unbiased.

    As these and other advances continue, we can expect machine learning to become even more powerful and versatile, driving innovation across industries and transforming how we live and work.`,
    coverImage: "/images/machine-learning.jpg",
    date: "2023-03-05T08:30:00Z",
    author: "Dr. Alan Zhang",
    category: "Technology",
  },
  // Continue adding more articles with similar structure
  // Each with unique slugs, titles, and content
  // Make sure to use image paths that would work with the images sitemap
]

// Sample categories data
const categories: Category[] = [
  {
    slug: "technology",
    name: "Technology",
    description: "Latest news and insights on technology trends, innovations, and digital transformation.",
    articleCount: articles.filter((article) => article.category === "Technology").length,
  },
  {
    slug: "business",
    name: "Business",
    description: "Business strategies, market trends, and corporate news from around the world.",
    articleCount: articles.filter((article) => article.category === "Business").length,
  },
  {
    slug: "science",
    name: "Science",
    description: "Discoveries, research, and advancements in various scientific fields.",
    articleCount: articles.filter((article) => article.category === "Science").length,
  },
  {
    slug: "health",
    name: "Health",
    description: "Health news, medical research, wellness tips, and healthcare innovations.",
    articleCount: articles.filter((article) => article.category === "Health").length,
  },
  {
    slug: "entertainment",
    name: "Entertainment",
    description: "News from the world of movies, music, television, and celebrity updates.",
    articleCount: articles.filter((article) => article.category === "Entertainment").length,
  },
  {
    slug: "sports",
    name: "Sports",
    description: "Sports news, game results, player updates, and analysis from various sports.",
    articleCount: articles.filter((article) => article.category === "Sports").length,
  },
]

// Functions to fetch articles
export async function getArticles(limit = 6): Promise<Article[]> {
  // Sort articles by date (newest first)
  const sortedArticles = [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return sortedArticles.slice(0, limit)
}

export async function getFeaturedArticle(): Promise<Article> {
  // For simplicity, return the newest article as featured
  const sortedArticles = [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return sortedArticles[0]
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  return articles.find((article) => article.slug === slug)
}

export async function getRelatedArticles(category: string, currentSlug: string, limit = 3): Promise<Article[]> {
  // Get articles in the same category, excluding the current article
  const relatedArticles = articles
    .filter((article) => article.category === category && article.slug !== currentSlug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)

  return relatedArticles
}

export async function getArticlesByCategory(categorySlug: string): Promise<Article[]> {
  const category = categories.find((cat) => cat.slug === categorySlug)

  if (!category) {
    return []
  }

  return articles
    .filter((article) => article.category === category.name)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// Functions to fetch categories
export async function getAllCategories(): Promise<Category[]> {
  return categories
}

export async function getCategoryInfo(slug: string): Promise<Category | undefined> {
  return categories.find((category) => category.slug === slug)
}

