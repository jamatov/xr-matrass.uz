/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getCorrectMattressType, getFilteredSizes, numberFormat, sendFeedback } from "../shared/helper";
import { useEffect, useState } from "react";
import { getMattress } from "../redux/mattressSlice";
import { getAllMattressSize } from "../redux/mattressSizeSlice";
import Loader from "../Components/Loader";
import InputMask from 'react-input-mask'
import { toast } from "react-toastify";

export default function Order() {
    const dispatch = useDispatch()
    const { isLoading, mattress } = useSelector(state => state.mattress)
    const { sizeLoading = isLoading, mattressSizeList } = useSelector(state => state.mattressSize)
    const navigate = useNavigate()


    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const sizes = getFilteredSizes(id, mattressSizeList)

    const [price, setPrice] = useState(sizes[0]?.price ? sizes[0]?.price : 0)
    const [activeSize, setActiveSize] = useState(sizes[0]?.size)
    const [isOpen, setIsOpen] = useState(false)
    const [phone, setPhone] = useState("+998")
    const [name, setName] = useState("")

    useEffect(() => {
        if (sizes.length > 0 && price === 0) {
            setPrice(sizes[0].price);
            setActiveSize(sizes[0].size);
        }
    }, [sizes]);

    useEffect(() => {
        dispatch(getMattress(id))
        dispatch(getAllMattressSize())
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (phone.length < 19) {
            toast.error('Phone number is required')
        } else {
            sendFeedback({ userName: name, phone, name: mattress.name, type: mattress.mattressType, size: activeSize, price })
                .then(() => {
                    setIsOpen(false)
                    navigate('/')
                })
        }
    }
    return (
        <>
            <div className="order py-5">
                <div className="container">
                    <Link to='/'>Back</Link>
                    {
                        isLoading ? <Loader />
                            :
                            <div className="row">
                                <div className="col-lg-6">
                                    <img className="w-100" src={mattress?.image} alt="" />
                                </div>
                                <div className="col-lg-6">
                                    <h3>{mattress?.name}</h3>
                                    <h6>{getCorrectMattressType(mattress?.mattressType)}</h6>
                                    <p>{mattress?.description}</p>
                                    {
                                        sizeLoading ? <Loader /> :
                                            getFilteredSizes(id, mattressSizeList)?.map(item => (
                                                <div
                                                    key={item.id}
                                                    onClick={() => { setActiveSize(item.size); setPrice(item.price) }}
                                                    className={`${activeSize === item.size ? 'active' : ''}`}
                                                    style={{ backgroundColor: activeSize === item.size ? 'blue' : 'silver' }}>
                                                    <h5>{item.size}</h5>
                                                </div>
                                            ))}
                                    <h5>{mattress && numberFormat(price)}</h5>
                                    {mattress && <button onClick={() => setIsOpen(true)} className="btn btn-primary">Order now</button>}
                                </div>
                            </div>
                    }
                </div>
            </div>

            <form onSubmit={handleSubmit} className={`myModal ${isOpen ? 'active' : ''}`}>
                <div className="wrap">
                    <input required value={name} onChange={e => setName(e.target.value)} placeholder="Name" type="text" className="form-control" />

                    <InputMask
                        id={'status-phone'}
                        placeholder="+998 (_) _ _ _"
                        mask="+998 (99) 999-99-99"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        disabled={false}
                        className={'form-control'}
                    />
                    <button type="submit" className="btn btn-primary">Send</button>
                </div>
                <div onClick={() => setIsOpen(false)} className="outline"></div>
            </form>
        </>
    )
}
