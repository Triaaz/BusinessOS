export default function Logo() {
  return (
    <div className="flex items-center select-none">
      
      <img 
        src="/logo.png" 
        alt="BusinessOS" 
        className="h-40 w-auto object-contain block"
        loading="eager"
      />
    </div>
  );
}