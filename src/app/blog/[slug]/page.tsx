export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    console.log('slug', slug)
    const { default: Post } = await import(`../../../content/${slug}.md`) // TODO alias import

    return (
        <div className="post-css">
            <Post />
        </div>
    )
}

// 預先產生靜態 HTML
export function generateStaticParams() {
    return [{ slug: 'learn-docker' }, { slug: 'learn-nextjs-app' }, { slug: 'react' }, { slug: 'solr' }]
}

export const dynamicParams = false // 不允許動態路由參數