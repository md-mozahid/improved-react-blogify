export default function ProductList() {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const loaderRef = useRef(null)

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${productsPerPage}&skip=${
          page * productsPerPage
        }`
      )
      const data = await response.json()

      if (data.products.length === 0) {
        setHasMore(false)
      } else {
        setProducts((prevProducts) => [...prevProducts, ...data.products])
        setPage((prevPage) => prevPage + 1)
      }
    }

    const onIntersection = (items) => {
      const loaderItem = items[0]

      if (loaderItem.isIntersecting && hasMore) {
        fetchProducts()
      }
    }

    // observer
    const observer = new IntersectionObserver(onIntersection)

    if (observer && loaderRef.current) {
      observer.observe(loaderRef.current)
    }
    // cleanup
    return () => {
      if (observer) observer.disconnect()
    }
  }, [hasMore, page])

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((product) => (
              <Product key={product.title} product={product} />
            ))}
          </div>
        </div>
      </section>

      {hasMore && (
        <div ref={loaderRef} className="text-center text-3xl text-red-600">
          Load more products...
        </div>
      )}
    </>
  )
}
