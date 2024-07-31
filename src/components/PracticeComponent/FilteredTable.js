import React, { useState, createContext, useContext } from 'react';

const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];
const ProductsContext = createContext(PRODUCTS);
const FilteredTable = () => {
    const [filterText, setFilterText] = useState("")
    const [inStockOnly, setInStockOnly] = useState(false)
    return (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <ProductsContext.Provider value={PRODUCTS}>
                <Search filterText={filterText} inStockOnly={inStockOnly} setFilterText={setFilterText} setInStockOnly={setInStockOnly} />
                <ProductTable filterText={filterText} inStockOnly={inStockOnly} />
            </ProductsContext.Provider>
        </div>
    )
}

const Search = ({ filterText, inStockOnly, setFilterText, setInStockOnly }) => {
    return (
        <>
            <span>
                Filter By:
                {" "} <input
                    type="text"
                    value={filterText}
                    placeholder='Search...'
                    onChange={(e) => setFilterText(e.target.value)}
                />
                <span>
                    <input
                        type='checkbox'
                        value={inStockOnly}
                        onChange={(e) => setInStockOnly(e.target.checked)}
                    />
                    Show only in stock option
                </span>
            </span>

        </>
    )
}

const ProductTable = ({ filterText, inStockOnly }) => {
    const categories = []
    const products = useContext(ProductsContext)
    products.map((product) => {
        if (categories.indexOf(product.category) == -1) {
            categories.push(product.category)
        }
    });
    const ProductsByCategories = categories.map(category =>
        <ProductsByCategory category={category} products={products} filterText={filterText} inStockOnly={inStockOnly} />
    )
    return (
        <div>{ProductsByCategories}</div>
    )
}

const ProductsByCategory = ({ category, products, filterText, inStockOnly }) => {
    const filteredProducts = products.filter(p => p.category == category)
    const filterTextProds = filterText ? filteredProducts.filter(p =>
        p.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1)
        : filteredProducts;
    const inStockFilter = inStockOnly ? filterTextProds.filter(p => p.stocked === true) : filterTextProds;
    const rows = inStockFilter.map(fp =>
        <tr>
            <td style={{ color: !fp.stocked ? 'red' : 'black' }}>{fp.name}</td>
            <td style={{ color: !fp.stocked ? 'red' : 'black' }}>{fp.price}</td>
        </tr>
    )
    return (
        <>
            <h2>{category}</h2>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                {rows}
            </table>
        </>
    )
}

export default FilteredTable;