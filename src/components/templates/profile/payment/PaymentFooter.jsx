import { Button } from '@/components/ui';

export const PaymentFooter = () => {
  return (
    <div className='sticky bottom-10 right-0 left-0 border-t border-gray-200 pt-4 flex items-end justify-between'>
      <div>
        <p className='text-gray-400 text-sm md:text-lg'>قیمت کل</p>
        <h4 className='text-xl font-medium'>۴۶۰.۲۶۵ تومان</h4>
      </div>
      <Button className="rounded-full w-40 h-10">
        پرداخت
      </Button>
    </div>
  );
};