import React, {FC} from 'react'

// @ts-ignore
import classnames from 'classnames'
import './_style.scss'
export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default'
}

interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    type?: ButtonType,
    children: React.ReactNode
}

const prefixCls = ((classname: any) => {
    return `National-${classname}`
})
/* 取得原生button的所有属性与自定义的类型*/
type NativeButtonProps= BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>

export type ButtonProps=Partial<NativeButtonProps>

const Button: FC<ButtonProps> = (props) => {
    const {className, disabled, size, type, children,...restProps} = props;
    const classes = classnames({
        [prefixCls('btn')]: true,
        [prefixCls(type)]: type,
        [prefixCls(size)]: size,
        [prefixCls('disabled')]: disabled,
    }, className)
    return (
        <>
            <button className={classes}
                    {...restProps}
            >
                {children}
            </button>
        </>
    )
}
Button.defaultProps = {
    disabled: false,
    size:ButtonSize.Large
}
export default Button

