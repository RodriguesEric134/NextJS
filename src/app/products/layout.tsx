export default function ProductLayout({ 
    children,
}: {
    children: React.ReactNode;
}){
    return <div>
        {children}
        <div>
            <h2>Produtos em alta</h2>
        </div>
    </div>;
}


