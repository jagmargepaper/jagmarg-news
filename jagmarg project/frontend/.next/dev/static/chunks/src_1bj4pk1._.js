(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/BreakingNews.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BreakingNews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
const defaultItems = [
    "Haryana Elections: Election Commission announces new dates for counting across all districts.",
    "Market Hits Record High: Sensex crosses major milestone in early morning trade.",
    "Weather Alert: Red warning issued for heavy rainfall in Chandigarh, Punjab, and Haryana.",
    "Sports Update: Indian contingent secures another Gold in the Asian Athletics Championship."
];
function BreakingNews({ newsItems = defaultItems }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-[#1A1A1A] flex items-center h-10 overflow-hidden border-b border-gray-800 relative z-40",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#D32F2F] text-white font-black uppercase tracking-[0.2em] text-[10px] px-6 h-full flex items-center shrink-0 z-10 relative",
                children: [
                    "Breaking News",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 -right-3 w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[12px] border-l-[#D32F2F]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BreakingNews.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BreakingNews.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-hidden relative flex items-center h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "flex gap-16 whitespace-nowrap px-8",
                    animate: {
                        x: [
                            "0%",
                            "-50%"
                        ]
                    },
                    transition: {
                        repeat: Infinity,
                        ease: "linear",
                        duration: 35
                    },
                    children: [
                        newsItems.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 text-gray-200 hover:text-white cursor-pointer transition-colors text-xs font-semibold tracking-wide",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 bg-[#FFC107] rounded-full animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BreakingNews.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this),
                                    item
                                ]
                            }, i, true, {
                                fileName: "[project]/src/components/BreakingNews.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)),
                        newsItems.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 text-gray-200 hover:text-white cursor-pointer transition-colors text-xs font-semibold tracking-wide",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 bg-[#FFC107] rounded-full animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BreakingNews.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this),
                                    item
                                ]
                            }, `dup-${i}`, true, {
                                fileName: "[project]/src/components/BreakingNews.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BreakingNews.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/BreakingNews.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BreakingNews.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = BreakingNews;
var _c;
__turbopack_context__.k.register(_c, "BreakingNews");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CategoryNewsBlock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryNewsBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.mjs [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.mjs [app-client] (ecmascript) <export default as ImageIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CompactArticleCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CompactArticleCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
// Inline Micro Card for Lists (Thumbnail on left, Text on right)
function MicroArticleCard({ post, locale, small = false }) {
    if (!post) return null;
    const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    const articleUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArticleUrl"])(post, locale);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: articleUrl,
        className: "group flex gap-3 sm:gap-4 items-center border-b border-gray-100 pb-3 last:border-0 last:pb-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${small ? 'w-[80px]' : 'w-[100px] sm:w-[120px]'} aspect-[4/3] bg-gray-100 relative overflow-hidden shrink-0`,
                children: imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: imageUrl,
                    alt: post.title?.rendered || '',
                    fill: true,
                    sizes: small ? "80px" : "120px",
                    className: "object-cover transition-transform duration-500 group-hover:scale-105"
                }, void 0, false, {
                    fileName: "[project]/src/components/CategoryNewsBlock.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"], {
                    className: "w-5 h-5 text-gray-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                }, void 0, false, {
                    fileName: "[project]/src/components/CategoryNewsBlock.tsx",
                    lineNumber: 28,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CategoryNewsBlock.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: `font-bold text-[#1A1A1A] leading-snug line-clamp-3 group-hover:text-[#D32F2F] transition-colors ${small ? 'text-xs' : 'text-[15px]'}`,
                    dangerouslySetInnerHTML: {
                        __html: post.title?.rendered || ''
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/CategoryNewsBlock.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CategoryNewsBlock.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CategoryNewsBlock.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = MicroArticleCard;
function CategoryNewsBlock({ categoryId, categoryName, categorySlug, layout = 'FullWidth-A', locale = 'hi', showTrendingBadge = false }) {
    _s();
    const [posts, setPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [hasInView, setHasInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const blockRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CategoryNewsBlock.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "CategoryNewsBlock.useEffect": (entries)=>{
                    if (entries[0].isIntersecting) {
                        setHasInView(true);
                        observer.disconnect();
                    }
                }
            }["CategoryNewsBlock.useEffect"], {
                threshold: 0,
                rootMargin: '400px'
            });
            if (blockRef.current) observer.observe(blockRef.current);
            return ({
                "CategoryNewsBlock.useEffect": ()=>observer.disconnect()
            })["CategoryNewsBlock.useEffect"];
        }
    }["CategoryNewsBlock.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CategoryNewsBlock.useEffect": ()=>{
            if (!hasInView) return;
            async function load() {
                try {
                    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPostsByCategory"])(categoryId, 9, 1);
                    setPosts(data || []);
                } catch (err) {
                    console.error('Failed to load category block', err);
                } finally{
                    setLoading(false);
                }
            }
            load();
        }
    }["CategoryNewsBlock.useEffect"], [
        categoryId,
        hasInView
    ]);
    if (!hasInView || loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: blockRef,
            className: "w-full mb-10 pb-8 border-b-2 border-gray-100 last:border-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-1.5 h-6 sm:h-8 bg-gray-200"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CategoryNewsBlock.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-8 w-48 bg-gray-200 rounded"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CategoryNewsBlock.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CategoryNewsBlock.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-[400px] bg-gray-50 animate-pulse border border-gray-100"
                }, void 0, false, {
                    fileName: "[project]/src/components/CategoryNewsBlock.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CategoryNewsBlock.tsx",
            lineNumber: 91,
            columnNumber: 7
        }, this);
    }
    if (posts.length === 0) return null;
    const viewAllLink = categorySlug ? `/${locale}/india/${categorySlug}` : `/${locale}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: blockRef,
        className: `w-full bg-white dark:bg-[#111111] rounded-sm border-t-4 border-[#1A1A1A] dark:border-gray-700 shadow-sm overflow-hidden mb-12 flex flex-col transition-colors`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-[#FAFAFA] dark:bg-[#1A1A1A] transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl md:text-3xl font-black text-[#1A1A1A] dark:text-white tracking-tight uppercase transition-colors",
                                children: categoryName
                            }, void 0, false, {
                                fileName: "[project]/src/components/CategoryNewsBlock.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-bold text-gray-400 mt-1 sm:mt-2",
                                children: [
                                    "(",
                                    posts.length,
                                    "+)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CategoryNewsBlock.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CategoryNewsBlock.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: viewAllLink,
                        className: "hidden sm:flex items-center gap-2 text-[#D32F2F] font-bold text-sm tracking-widest uppercase transition-transform group-hover:translate-x-1",
                        children: [
                            "View All ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CategoryNewsBlock.tsx",
                                lineNumber: 118,
                                columnNumber: 20
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CategoryNewsBlock.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CategoryNewsBlock.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            layout === 'FullWidth-A' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            showTrendingBadge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-2 left-2 z-20 bg-black text-white text-[10px] font-black tracking-widest uppercase px-2 py-1 flex items-center gap-1 shadow-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                        className: "w-3 h-3 text-[#FF3333] animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CategoryNewsBlock.tsx",
                                        lineNumber: 129,
                                        columnNumber: 20
                                    }, this),
                                    " Trending"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CategoryNewsBlock.tsx",
                                lineNumber: 128,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CompactArticleCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                post: posts[0],
                                locale: locale,
                                showExcerpt: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/CategoryNewsBlock.tsx",
                                lineNumber: 132,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CategoryNewsBlock.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4",
                        children: posts.slice(1, 9).map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MicroArticleCard, {
                                post: post,
                                locale: locale
                            }, post.id, false, {
                                fileName: "[project]/src/components/CategoryNewsBlock.tsx",
                                lineNumber: 137,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/CategoryNewsBlock.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CategoryNewsBlock.tsx",
                lineNumber: 124,
                columnNumber: 9
            }, this),
            layout === 'FullWidth-B' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 order-2 lg:order-1",
                        children: posts.slice(1, 9).map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MicroArticleCard, {
                                post: post,
                                locale: locale
                            }, post.id, false, {
                                fileName: "[project]/src/components/CategoryNewsBlock.tsx",
                                lineNumber: 148,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/CategoryNewsBlock.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative order-1 lg:order-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CompactArticleCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            post: posts[0],
                            locale: locale,
                            showExcerpt: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/CategoryNewsBlock.tsx",
                            lineNumber: 152,
                            columnNumber: 14
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CategoryNewsBlock.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CategoryNewsBlock.tsx",
                lineNumber: 145,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CategoryNewsBlock.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_s(CategoryNewsBlock, "99KmbFQlarLQaahsGuY8CMYzZn0=");
_c1 = CategoryNewsBlock;
var _c, _c1;
__turbopack_context__.k.register(_c, "MicroArticleCard");
__turbopack_context__.k.register(_c1, "CategoryNewsBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CompactArticleCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CompactArticleCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.mjs [app-client] (ecmascript) <export default as ImageIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
;
;
;
;
;
function CompactArticleCard({ post, locale, showExcerpt = false }) {
    if (!post) return null;
    const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    // Extract Category Name for the Badge
    let badgeName = 'NEWS';
    const terms = post._embedded?.['wp:term']?.[0] || [];
    if (terms.length > 0) {
        // Try to get the first category name
        badgeName = terms[0].name;
    }
    const articleUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArticleUrl"])(post, locale);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: articleUrl,
        className: "group flex flex-col gap-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full aspect-video bg-gray-100 relative overflow-hidden flex items-center justify-center mb-3",
                children: imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: imageUrl,
                    alt: post.title?.rendered || "News Image",
                    fill: true,
                    sizes: "(max-width: 768px) 50vw, 25vw",
                    className: "object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                }, void 0, false, {
                    fileName: "[project]/src/components/CompactArticleCard.tsx",
                    lineNumber: 27,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flex flex-col items-center justify-center bg-gray-200 group-hover:scale-105 transition-transform duration-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"], {
                            className: "w-6 h-6 text-gray-400 mb-1"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CompactArticleCard.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-400 text-[8px] font-black uppercase tracking-widest",
                            children: "Jagmarg"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CompactArticleCard.tsx",
                            lineNumber: 37,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CompactArticleCard.tsx",
                    lineNumber: 35,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CompactArticleCard.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] md:text-[11px] font-black uppercase tracking-[0.15em] text-[#D32F2F] mb-1.5 block",
                        children: badgeName
                    }, void 0, false, {
                        fileName: "[project]/src/components/CompactArticleCard.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-[14px] md:text-[16px] font-black text-[#1A1A1A] dark:text-white leading-snug line-clamp-3 group-hover:underline decoration-[#D32F2F] decoration-2 underline-offset-2 transition-all",
                        dangerouslySetInnerHTML: {
                            __html: post.title?.rendered || ''
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/CompactArticleCard.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    showExcerpt && post.excerpt?.rendered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gray-600 dark:text-gray-400 text-xs mt-2 line-clamp-2 leading-relaxed",
                        dangerouslySetInnerHTML: {
                            __html: post.excerpt.rendered
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/CompactArticleCard.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CompactArticleCard.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CompactArticleCard.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = CompactArticleCard;
var _c;
__turbopack_context__.k.register(_c, "CompactArticleCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/EpaperAndVideo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EpaperAndVideo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-play.mjs [app-client] (ecmascript) <export default as PlayCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function EpaperAndVideo() {
    _s();
    const scrollContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollLeft = ()=>{
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -350,
                behavior: 'smooth'
            });
        }
    };
    const scrollRight = ()=>{
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 350,
                behavior: 'smooth'
            });
        }
    };
    const youtubeVideos = [
        {
            id: 'dQw4w9WgXcQ',
            title: 'Jagmarg Exclusive: CM Meeting Highlights'
        },
        {
            id: 'jNQXAC9IVRw',
            title: 'Special Report: Upcoming Elections 2026'
        },
        {
            id: 'tPEE9ZwTmy0',
            title: 'Daily News Briefing - Top 10 Stories'
        },
        {
            id: 'dQw4w9WgXcQ',
            title: 'Live Debate at Prime Time'
        },
        {
            id: 'jNQXAC9IVRw',
            title: 'Weather Forecast & Updates'
        },
        {
            id: 'tPEE9ZwTmy0',
            title: 'Sports Highlights of the Day'
        }
    ];
    const epapers = [
        {
            name: 'Chandigarh',
            link: 'https://epaper.jagmarg.com/edition/Chandigarh/39766',
            color: 'bg-[#0070AC]',
            image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=400&q=80'
        },
        {
            name: 'Haryana',
            link: 'https://epaper.jagmarg.com/edition/Haryana/39765',
            color: 'bg-[#D32F2F]',
            image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=80'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "jsx-e4c0ee4aadd7f829" + " " + "w-full bg-white flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-e4c0ee4aadd7f829" + " " + "w-full bg-[#111111] border-y-4 border-[#D32F2F]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-e4c0ee4aadd7f829" + " " + "max-w-[1280px] mx-auto px-4 md:px-6 py-12 flex flex-col lg:flex-row gap-12 justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-e4c0ee4aadd7f829" + " " + "w-full lg:w-[35%] flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-e4c0ee4aadd7f829" + " " + "flex items-center justify-between mb-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "jsx-e4c0ee4aadd7f829" + " " + "text-white font-black text-2xl uppercase tracking-widest border-l-4 border-[#D32F2F] pl-4",
                                        children: "Today's E-Paper"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EpaperAndVideo.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EpaperAndVideo.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-e4c0ee4aadd7f829" + " " + "flex gap-4 h-[400px]",
                                    children: epapers.map((paper, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: paper.link,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "jsx-e4c0ee4aadd7f829" + " " + "relative group cursor-pointer w-1/2 flex flex-col rounded-md overflow-hidden shadow-2xl border-2 border-gray-800 hover:border-white transition-all duration-300 transform hover:-translate-y-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-e4c0ee4aadd7f829" + " " + "relative w-full h-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: paper.image,
                                                        alt: paper.name,
                                                        fill: true,
                                                        className: "object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EpaperAndVideo.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-e4c0ee4aadd7f829" + " " + "absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EpaperAndVideo.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-e4c0ee4aadd7f829" + " " + "absolute top-4 left-0 right-0 text-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-e4c0ee4aadd7f829" + " " + "bg-white text-black px-4 py-1 font-black text-xl tracking-tighter uppercase shadow-md",
                                                            children: "जग मार्ग"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/EpaperAndVideo.tsx",
                                                            lineNumber: 78,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EpaperAndVideo.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-e4c0ee4aadd7f829" + " " + "absolute bottom-0 left-0 right-0 p-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-e4c0ee4aadd7f829" + " " + `${paper.color} w-full text-center py-2 rounded-sm shadow-lg`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-e4c0ee4aadd7f829" + " " + "text-white font-bold tracking-widest uppercase text-sm",
                                                                children: paper.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EpaperAndVideo.tsx",
                                                                lineNumber: 85,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/EpaperAndVideo.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EpaperAndVideo.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/EpaperAndVideo.tsx",
                                                lineNumber: 68,
                                                columnNumber: 19
                                            }, this)
                                        }, idx, false, {
                                            fileName: "[project]/src/components/EpaperAndVideo.tsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EpaperAndVideo.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/EpaperAndVideo.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-e4c0ee4aadd7f829" + " " + "w-full lg:w-[65%] flex flex-col overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-e4c0ee4aadd7f829" + " " + "flex items-center justify-between mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-e4c0ee4aadd7f829" + " " + "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__["PlayCircle"], {
                                                    className: "w-8 h-8 text-[#FF0000]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EpaperAndVideo.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "jsx-e4c0ee4aadd7f829" + " " + "text-white font-black text-2xl uppercase tracking-widest border-l-4 border-white pl-4 truncate max-w-[200px] sm:max-w-none",
                                                    children: "Jagmarg Videos"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EpaperAndVideo.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/EpaperAndVideo.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-e4c0ee4aadd7f829" + " " + "flex items-center gap-2 sm:gap-4 shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://youtube.com/@jagmargnews?si=Ot4CSh4QQO-x2HaV",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "jsx-e4c0ee4aadd7f829" + " " + "hidden sm:flex text-gray-400 hover:text-white items-center gap-1 text-xs font-bold uppercase tracking-widest transition-colors mr-2",
                                                    children: [
                                                        "Subscribe ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/EpaperAndVideo.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/EpaperAndVideo.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: scrollLeft,
                                                    className: "jsx-e4c0ee4aadd7f829" + " " + "p-2 rounded-full bg-gray-800 hover:bg-[#D32F2F] text-white transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EpaperAndVideo.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EpaperAndVideo.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: scrollRight,
                                                    className: "jsx-e4c0ee4aadd7f829" + " " + "p-2 rounded-full bg-gray-800 hover:bg-[#D32F2F] text-white transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EpaperAndVideo.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EpaperAndVideo.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/EpaperAndVideo.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/EpaperAndVideo.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: scrollContainerRef,
                                    style: {
                                        gridAutoColumns: 'calc(50% - 12px)',
                                        scrollbarWidth: 'none',
                                        msOverflowStyle: 'none'
                                    },
                                    className: "jsx-e4c0ee4aadd7f829" + " " + "grid grid-rows-2 grid-flow-col gap-6 overflow-x-auto snap-x scrollbar-hide h-[400px]",
                                    children: youtubeVideos.map((video, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-e4c0ee4aadd7f829" + " " + "flex flex-col gap-2 group h-full snap-start",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-e4c0ee4aadd7f829" + " " + "w-full h-full rounded-lg overflow-hidden bg-gray-900 border-2 border-transparent group-hover:border-[#D32F2F] group-hover:shadow-[0_0_15px_rgba(211,47,47,0.5)] transition-all duration-300 relative transform group-hover:scale-[1.02]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                                    width: "100%",
                                                    height: "100%",
                                                    src: `https://www.youtube.com/embed/${video.id}`,
                                                    title: video.title,
                                                    frameBorder: "0",
                                                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                                    allowFullScreen: true,
                                                    loading: "lazy",
                                                    className: "jsx-e4c0ee4aadd7f829" + " " + "absolute inset-0 w-full h-full pointer-events-auto"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EpaperAndVideo.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EpaperAndVideo.tsx",
                                                lineNumber: 123,
                                                columnNumber: 19
                                            }, this)
                                        }, idx, false, {
                                            fileName: "[project]/src/components/EpaperAndVideo.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EpaperAndVideo.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/EpaperAndVideo.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/EpaperAndVideo.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/EpaperAndVideo.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "e4c0ee4aadd7f829",
                children: ".scrollbar-hide::-webkit-scrollbar{display:none}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/EpaperAndVideo.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(EpaperAndVideo, "Gfm/oEKPzfcG/oikjUDPHSjaGoQ=");
_c = EpaperAndVideo;
var _c;
__turbopack_context__.k.register(_c, "EpaperAndVideo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/NewsFeedLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewsFeedLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SidebarWidget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SidebarWidget.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CompactArticleCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CompactArticleCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CategoryNewsBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CategoryNewsBlock.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function NewsFeedLayout({ initialPosts, categoryId, tagId, feedTitle = "Latest News", locale = "hi", categoryParentId }) {
    _s();
    // Infinite Scroll States
    const [articles, setArticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialPosts || []);
    // Track what we are currently fetching (Current -> Parent -> Global)
    const [fetchLevel, setFetchLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('current');
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasMore, setHasMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const loaderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Category States
    const [subCategories, setSubCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [siblingCategories, setSiblingCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewsFeedLayout.useEffect": ()=>{
            async function loadCategoryBlocks() {
                try {
                    let cats = [];
                    let siblings = [];
                    if (!categoryId) {
                        // HOMEPAGE: Fetch curated categories
                        const curatedSlugs = [
                            'national',
                            'politics',
                            'crime',
                            'business',
                            'khel',
                            'entertainment',
                            'lifestyle',
                            'jagamarga-khasa',
                            'rajasthan',
                            'delhi',
                            'uttar-pradesh'
                        ];
                        cats = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCategoriesBySlugs"])(curatedSlugs);
                        const orderedCats = [];
                        curatedSlugs.forEach({
                            "NewsFeedLayout.useEffect.loadCategoryBlocks": (slug)=>{
                                const match = cats.find({
                                    "NewsFeedLayout.useEffect.loadCategoryBlocks.match": (c)=>c.slug === slug
                                }["NewsFeedLayout.useEffect.loadCategoryBlocks.match"]);
                                if (match) orderedCats.push(match);
                            }
                        }["NewsFeedLayout.useEffect.loadCategoryBlocks"]);
                        cats = orderedCats;
                    } else {
                        // STATE PAGE: Fetch child categories (Districts)
                        cats = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCategories"])(categoryId, 30);
                        // DISTRICT PAGE: If no children, fetch siblings
                        if (cats.length === 0 && categoryParentId && categoryParentId !== 0) {
                            siblings = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCategories"])(categoryParentId, 30);
                            siblings = siblings.filter({
                                "NewsFeedLayout.useEffect.loadCategoryBlocks": (c)=>c.id !== categoryId && c.count > 0
                            }["NewsFeedLayout.useEffect.loadCategoryBlocks"]);
                        }
                    }
                    if (cats && cats.length > 0) {
                        const validCats = cats.filter({
                            "NewsFeedLayout.useEffect.loadCategoryBlocks.validCats": (c)=>c.slug !== 'uncategorized' && c.count >= 1
                        }["NewsFeedLayout.useEffect.loadCategoryBlocks.validCats"]);
                        setSubCategories(validCats);
                    }
                    if (siblings.length > 0) {
                        setSiblingCategories(siblings);
                    }
                } catch (e) {
                    console.error("Failed to fetch category blocks", e);
                }
            }
            loadCategoryBlocks();
        }
    }["NewsFeedLayout.useEffect"], [
        categoryId,
        categoryParentId
    ]);
    const loadMorePosts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NewsFeedLayout.useCallback[loadMorePosts]": async ()=>{
            if (isLoading || !hasMore) return;
            setIsLoading(true);
            try {
                const nextPage = page + 1;
                let newPosts = [];
                // Level 1: Current Category
                if (fetchLevel === 'current') {
                    if (categoryId) newPosts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPostsByCategory"])(categoryId, 24, nextPage);
                    else if (tagId) newPosts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPostsByTag"])(tagId, 24, nextPage);
                    else newPosts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPosts"])(24, nextPage);
                } else if (fetchLevel === 'parent') {
                    newPosts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPostsByCategory"])(categoryParentId, 24, nextPage);
                } else {
                    newPosts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchPosts"])(24, nextPage);
                }
                if (newPosts && newPosts.length > 0) {
                    setArticles({
                        "NewsFeedLayout.useCallback[loadMorePosts]": (prev)=>{
                            // Filter duplicates just in case
                            const existingIds = new Set(prev.map({
                                "NewsFeedLayout.useCallback[loadMorePosts]": (p)=>p.id
                            }["NewsFeedLayout.useCallback[loadMorePosts]"]));
                            const uniquePosts = newPosts.filter({
                                "NewsFeedLayout.useCallback[loadMorePosts].uniquePosts": (p)=>!existingIds.has(p.id)
                            }["NewsFeedLayout.useCallback[loadMorePosts].uniquePosts"]);
                            return [
                                ...prev,
                                ...uniquePosts
                            ];
                        }
                    }["NewsFeedLayout.useCallback[loadMorePosts]"]);
                    setPage(nextPage);
                } else {
                    // We ran out of posts for the current level! Switch to the next logical level.
                    if (fetchLevel === 'current' && categoryParentId && categoryParentId !== 0) {
                        setFetchLevel('parent');
                        setPage(0); // Next call will fetch page 1 of parent
                    } else if (fetchLevel === 'current' || fetchLevel === 'parent') {
                        setFetchLevel('global');
                        setPage(0);
                    } else {
                        setHasMore(false);
                    }
                }
            } catch (error) {
                console.error('Failed to fetch more posts:', error);
            } finally{
                setIsLoading(false);
            }
        }
    }["NewsFeedLayout.useCallback[loadMorePosts]"], [
        page,
        isLoading,
        hasMore,
        categoryId,
        tagId,
        fetchLevel,
        categoryParentId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewsFeedLayout.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "NewsFeedLayout.useEffect": (entries)=>{
                    if (entries[0].isIntersecting && !isLoading && hasMore) {
                        loadMorePosts();
                    }
                }
            }["NewsFeedLayout.useEffect"], {
                threshold: 0.1,
                rootMargin: '1500px'
            });
            if (loaderRef.current) observer.observe(loaderRef.current);
            return ({
                "NewsFeedLayout.useEffect": ()=>observer.disconnect()
            })["NewsFeedLayout.useEffect"];
        }
    }["NewsFeedLayout.useEffect"], [
        isLoading,
        hasMore,
        loadMorePosts
    ]);
    // Determine current feed header based on fallback level
    let currentFeedTitle = feedTitle;
    if (fetchLevel === 'parent') currentFeedTitle = "More Top News from State";
    if (fetchLevel === 'global') currentFeedTitle = "National & Trending";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full bg-[#FAFAFA] dark:bg-[#0A0A0A] py-12 border-t border-gray-200/50 dark:border-gray-800 transition-colors",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1280px] mx-auto px-6",
            children: [
                siblingCategories.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full mb-12 bg-white dark:bg-[#111111] p-6 border border-gray-200 dark:border-gray-800 shadow-sm rounded-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-black text-gray-900 dark:text-white uppercase tracking-tight",
                                    children: "Explore More Districts"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NewsFeedLayout.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "w-5 h-5 text-[#D32F2F]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NewsFeedLayout.tsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/NewsFeedLayout.tsx",
                            lineNumber: 149,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-3",
                            children: siblingCategories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/${locale}/india/${cat.slug}`,
                                    className: "px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-[#D32F2F] hover:text-white dark:hover:bg-[#D32F2F] text-gray-800 dark:text-gray-200 text-sm font-bold uppercase transition-colors",
                                    children: cat.name
                                }, cat.id, false, {
                                    fileName: "[project]/src/components/NewsFeedLayout.tsx",
                                    lineNumber: 155,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/NewsFeedLayout.tsx",
                            lineNumber: 153,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/NewsFeedLayout.tsx",
                    lineNumber: 148,
                    columnNumber: 11
                }, this),
                subCategories.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full flex flex-col mb-12",
                    children: [
                        subCategories.map((cat, index)=>{
                            const layoutType = index % 2 === 0 ? 'FullWidth-A' : 'FullWidth-B';
                            const showAdAfter = (index + 1) % 2 === 0 && index !== subCategories.length - 1;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CategoryNewsBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        categoryId: cat.id,
                                        categoryName: cat.name,
                                        categorySlug: cat.slug,
                                        layout: layoutType,
                                        locale: locale,
                                        showTrendingBadge: index === 0
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NewsFeedLayout.tsx",
                                        lineNumber: 177,
                                        columnNumber: 19
                                    }, this),
                                    showAdAfter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-[120px] bg-gray-100 dark:bg-[#1A1A1A] flex flex-col items-center justify-center border border-gray-200 dark:border-gray-800 relative overflow-hidden mb-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative z-10 text-[10px] tracking-widest font-bold uppercase text-gray-400 mb-1",
                                                children: "Advertisement"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/NewsFeedLayout.tsx",
                                                lineNumber: 187,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative z-10 text-xs font-black tracking-widest text-gray-300 dark:text-gray-600",
                                                children: "728 x 90"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/NewsFeedLayout.tsx",
                                                lineNumber: 188,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/NewsFeedLayout.tsx",
                                        lineNumber: 186,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, `catblock-fw-${cat.id}`, true, {
                                fileName: "[project]/src/components/NewsFeedLayout.tsx",
                                lineNumber: 176,
                                columnNumber: 17
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-px bg-gray-300 dark:bg-gray-800 mt-12 mb-2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/NewsFeedLayout.tsx",
                            lineNumber: 195,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/NewsFeedLayout.tsx",
                    lineNumber: 169,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-8 flex flex-col gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-6 mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-1.5 h-6 bg-black dark:bg-[#D32F2F]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/NewsFeedLayout.tsx",
                                            lineNumber: 205,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-black text-[#1A1A1A] dark:text-white tracking-tight uppercase",
                                            children: currentFeedTitle
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/NewsFeedLayout.tsx",
                                            lineNumber: 206,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/NewsFeedLayout.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6",
                                    children: articles.map((news, index)=>{
                                        const showInlineAd = (index + 1) % 6 === 0;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CompactArticleCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    post: news,
                                                    locale: locale,
                                                    showExcerpt: false
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/NewsFeedLayout.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 21
                                                }, this),
                                                showInlineAd && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "col-span-1 md:col-span-2 w-full h-[120px] bg-gray-100 dark:bg-[#1A1A1A] flex flex-col items-center justify-center border border-gray-200 dark:border-gray-800 relative overflow-hidden my-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "relative z-10 text-[10px] tracking-widest font-bold uppercase text-gray-400 mb-1",
                                                            children: "Advertisement"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/NewsFeedLayout.tsx",
                                                            lineNumber: 219,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "relative z-10 text-xs font-black tracking-widest text-gray-300 dark:text-gray-600",
                                                            children: "728 x 90"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/NewsFeedLayout.tsx",
                                                            lineNumber: 220,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/NewsFeedLayout.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, `news-${news.id}-${index}`, true, {
                                            fileName: "[project]/src/components/NewsFeedLayout.tsx",
                                            lineNumber: 215,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NewsFeedLayout.tsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: loaderRef,
                                    className: "w-full py-12 flex justify-center items-center",
                                    children: [
                                        isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 text-[#1A1A1A] dark:text-white font-black tracking-widest uppercase text-xs bg-white dark:bg-[#111111] px-6 py-3 border border-gray-200 dark:border-gray-800 shadow-sm rounded-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "w-4 h-4 animate-spin text-[#D32F2F]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/NewsFeedLayout.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 19
                                                }, this),
                                                "Loading More News..."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/NewsFeedLayout.tsx",
                                            lineNumber: 230,
                                            columnNumber: 17
                                        }, this),
                                        !hasMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-gray-400 font-bold uppercase tracking-widest text-xs",
                                            children: "No more news available"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/NewsFeedLayout.tsx",
                                            lineNumber: 236,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/NewsFeedLayout.tsx",
                                    lineNumber: 228,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/NewsFeedLayout.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-4 flex flex-col gap-8 hidden lg:flex mt-[80px]",
                            children: Array.from({
                                length: Math.max(3, Math.ceil(articles.length / 4))
                            }).map((_, i)=>{
                                const startIndex = i * 4;
                                const widgetPosts = articles.slice(startIndex, startIndex + 4);
                                if (widgetPosts.length === 0 && i > 2) return null;
                                const postsToUse = widgetPosts.length > 0 ? widgetPosts : articles.slice(0, 4);
                                const topics = [
                                    'Trending Now',
                                    'Top Stories',
                                    'Business',
                                    'Sports',
                                    'Entertainment',
                                    'Must Read',
                                    'Highlights',
                                    'Local News'
                                ];
                                const title = topics[i % topics.length];
                                const showAd = (i + 1) % 2 === 0;
                                const isLast = i === Math.max(3, Math.ceil(articles.length / 4)) - 1;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-full flex flex-col gap-8 lg:items-end ${isLast ? 'sticky top-[100px] h-fit pb-8' : ''}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SidebarWidget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            title: title,
                                            posts: postsToUse
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/NewsFeedLayout.tsx",
                                            lineNumber: 259,
                                            columnNumber: 19
                                        }, this),
                                        showAd && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-[300px] h-[250px] bg-gray-100 dark:bg-[#1A1A1A] flex flex-col items-center justify-center border border-gray-200 dark:border-gray-800 relative overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "relative z-10 text-[10px] tracking-widest font-bold uppercase text-gray-400 mb-1",
                                                    children: "Advertisement"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/NewsFeedLayout.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "relative z-10 text-xs font-black tracking-widest text-gray-300 dark:text-gray-600",
                                                    children: "300 x 250"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/NewsFeedLayout.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/NewsFeedLayout.tsx",
                                            lineNumber: 262,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, `sidebar-group-${i}`, true, {
                                    fileName: "[project]/src/components/NewsFeedLayout.tsx",
                                    lineNumber: 258,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/NewsFeedLayout.tsx",
                            lineNumber: 244,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/NewsFeedLayout.tsx",
                    lineNumber: 200,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/NewsFeedLayout.tsx",
            lineNumber: 144,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/NewsFeedLayout.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
_s(NewsFeedLayout, "EFdd3aZzCg6GTbxUIGjBLBzoTSc=");
_c = NewsFeedLayout;
var _c;
__turbopack_context__.k.register(_c, "NewsFeedLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SidebarWidget.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.mjs [app-client] (ecmascript) <export default as Image>");
;
;
;
;
const SidebarWidget = ({ title, posts, categorySlug, locale = 'hi' })=>{
    if (!posts || posts.length === 0) return null;
    // Helper inside component to avoid breaking if api.ts is not imported properly in caller
    const getArticleLink = (post)=>{
        const terms = post?._embedded?.['wp:term']?.[0] || [];
        let state = 'news';
        let district = 'news';
        if (terms.length > 0) {
            state = terms[0].slug;
            if (terms.length > 1) district = terms[1].slug;
        }
        return `/${locale}/india/${state}/${district}/${post?.slug}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-5 border border-gray-200 shadow-sm lg:ml-auto lg:w-[300px] w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 mb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1.5 h-5 bg-[#D32F2F]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SidebarWidget.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-black uppercase tracking-tight text-[#1A1A1A]",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/SidebarWidget.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SidebarWidget.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4 mb-5",
                children: posts.map((post, idx)=>{
                    const imgUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: getArticleLink(post),
                        className: "group flex gap-3 items-start border-b border-gray-50 pb-4 last:border-0 last:pb-0",
                        children: [
                            imgUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[60px] h-[60px] shrink-0 bg-gray-100 relative overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: imgUrl,
                                    alt: "Thumb",
                                    fill: true,
                                    sizes: "60px",
                                    className: "object-cover group-hover:scale-110 transition-transform"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SidebarWidget.tsx",
                                    lineNumber: 33,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/SidebarWidget.tsx",
                                lineNumber: 32,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[60px] h-[60px] shrink-0 bg-gray-100 relative overflow-hidden flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                    className: "w-4 h-4 text-gray-300"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SidebarWidget.tsx",
                                    lineNumber: 37,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/SidebarWidget.tsx",
                                lineNumber: 36,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-xs font-bold leading-snug text-[#1A1A1A] group-hover:text-[#D32F2F] transition-colors line-clamp-3",
                                dangerouslySetInnerHTML: {
                                    __html: post.title?.rendered || ''
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/SidebarWidget.tsx",
                                lineNumber: 40,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, `widget-${post.id}-${idx}`, true, {
                        fileName: "[project]/src/components/SidebarWidget.tsx",
                        lineNumber: 30,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/components/SidebarWidget.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            categorySlug && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: `/${locale}/india/${categorySlug}`,
                className: "block w-full py-2.5 text-center text-xs font-bold uppercase tracking-widest text-[#D32F2F] border border-[#D32F2F] hover:bg-[#D32F2F] hover:text-white transition-colors",
                children: [
                    "More ",
                    title
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SidebarWidget.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SidebarWidget.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SidebarWidget;
const __TURBOPACK__default__export__ = SidebarWidget;
var _c;
__turbopack_context__.k.register(_c, "SidebarWidget");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchCategories",
    ()=>fetchCategories,
    "fetchCategoriesBySlugs",
    ()=>fetchCategoriesBySlugs,
    "fetchCategoryById",
    ()=>fetchCategoryById,
    "fetchCategoryBySlug",
    ()=>fetchCategoryBySlug,
    "fetchChildCategories",
    ()=>fetchChildCategories,
    "fetchPageBySlug",
    ()=>fetchPageBySlug,
    "fetchPostBySlug",
    ()=>fetchPostBySlug,
    "fetchPosts",
    ()=>fetchPosts,
    "fetchPostsByCategory",
    ()=>fetchPostsByCategory,
    "fetchPostsByTag",
    ()=>fetchPostsByTag,
    "fetchSearchResults",
    ()=>fetchSearchResults,
    "fetchTagBySlug",
    ()=>fetchTagBySlug,
    "getArticleUrl",
    ()=>getArticleUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const WP_API_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_WP_API_URL || 'https://jagmarg.com/wp-json/wp/v2';
async function fetchPosts(limit = 10, page = 1) {
    try {
        const res = await fetch(`${WP_API_URL}/posts?per_page=${limit}&page=${page}&_embed`, {
            next: {
                revalidate: 60
            } // Cache for 60 seconds (ISR)
        });
        if (!res.ok) throw new Error('Failed to fetch posts');
        return await res.json();
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}
async function fetchCategories(parentId, perPage = 20) {
    try {
        let url = `${WP_API_URL}/categories?hide_empty=true&per_page=${perPage}&orderby=count&order=desc`;
        if (parentId !== undefined) {
            url += `&parent=${parentId}`;
        }
        const res = await fetch(url, {
            next: {
                revalidate: 3600
            }
        });
        if (!res.ok) throw new Error('Failed to fetch categories');
        return await res.json();
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
}
async function fetchCategoriesBySlugs(slugs) {
    try {
        const slugsStr = slugs.join(',');
        const url = `${WP_API_URL}/categories?slug=${slugsStr}&hide_empty=true&per_page=100`;
        const res = await fetch(url, {
            next: {
                revalidate: 3600
            }
        });
        if (!res.ok) throw new Error('Failed to fetch categories by slugs');
        return await res.json();
    } catch (error) {
        console.error('Error fetching categories by slugs:', error);
        return [];
    }
}
async function fetchPostBySlug(slug) {
    try {
        const res = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed`, {
            next: {
                revalidate: 60
            }
        });
        if (!res.ok) throw new Error('Failed to fetch post');
        const posts = await res.json();
        return posts.length > 0 ? posts[0] : null;
    } catch (error) {
        console.error(`Error fetching post ${slug}:`, error);
        return null;
    }
}
async function fetchCategoryBySlug(slug) {
    try {
        const res = await fetch(`${WP_API_URL}/categories?slug=${slug}`);
        const cats = await res.json();
        return cats.length > 0 ? cats[0] : null;
    } catch (error) {
        return null;
    }
}
async function fetchCategoryById(id) {
    try {
        const res = await fetch(`${WP_API_URL}/categories/${id}`);
        const cat = await res.json();
        return cat.id ? cat : null;
    } catch (error) {
        return null;
    }
}
async function fetchChildCategories(parentId) {
    try {
        const res = await fetch(`${WP_API_URL}/categories?parent=${parentId}&hide_empty=false`);
        return await res.json();
    } catch (error) {
        return [];
    }
}
async function fetchPostsByCategory(categoryId, limit = 15, page = 1) {
    try {
        const res = await fetch(`${WP_API_URL}/posts?categories=${categoryId}&per_page=${limit}&page=${page}&_embed`, {
            next: {
                revalidate: 60
            }
        });
        return await res.json();
    } catch (error) {
        return [];
    }
}
async function fetchTagBySlug(slug) {
    try {
        const res = await fetch(`${WP_API_URL}/tags?slug=${slug}`);
        const tags = await res.json();
        return tags.length > 0 ? tags[0] : null;
    } catch (error) {
        return null;
    }
}
async function fetchPostsByTag(tagId, limit = 15, page = 1) {
    try {
        const res = await fetch(`${WP_API_URL}/posts?tags=${tagId}&per_page=${limit}&page=${page}&_embed`, {
            next: {
                revalidate: 60
            }
        });
        return await res.json();
    } catch (error) {
        return [];
    }
}
async function fetchPageBySlug(slug) {
    try {
        const res = await fetch(`${WP_API_URL}/pages?slug=${slug}&_embed`, {
            next: {
                revalidate: 60
            }
        });
        const pages = await res.json();
        return pages.length > 0 ? pages[0] : null;
    } catch (error) {
        return null;
    }
}
async function fetchSearchResults(query, limit = 15, page = 1) {
    try {
        const res = await fetch(`${WP_API_URL}/posts?search=${encodeURIComponent(query)}&per_page=${limit}&page=${page}&_embed`, {
            next: {
                revalidate: 60
            }
        });
        return await res.json();
    } catch (error) {
        return [];
    }
}
function getArticleUrl(article, locale) {
    if (!article) return `/${locale}`;
    const terms = article._embedded && article._embedded['wp:term'] ? article._embedded['wp:term'][0] : [];
    let categorySlug = 'news';
    if (terms && terms.length > 0) {
        // WordPress usually includes parent ID. Parent = 0 means it's a top-level category (e.g. State)
        const parentCategory = terms.find((t)=>t.parent === 0);
        if (parentCategory) {
            categorySlug = parentCategory.slug;
        } else {
            // Fallback: use the last term, or first if only one
            categorySlug = terms[terms.length - 1].slug;
        }
    }
    return `/${locale}/india/${categorySlug}/${article.slug}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1bj4pk1._.js.map