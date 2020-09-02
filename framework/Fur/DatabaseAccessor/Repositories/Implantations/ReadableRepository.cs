﻿// 框架名称：Fur
// 框架作者：百小僧
// 框架版本：1.0.0
// 开源协议：MIT
// 项目地址：https://gitee.com/monksoul/Fur

using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading;
using System.Threading.Tasks;

namespace Fur.DatabaseAccessor
{
    /// <summary>
    /// 可写仓储
    /// </summary>
    /// <typeparam name="TEntity"></typeparam>
    public partial class EFCoreRepository<TEntity>
         where TEntity : class, IDbEntityBase, new()
    {
        /// <summary>
        /// 根据主键查找
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        public virtual TEntity Find(object key)
        {
            return Entities.Find(key);
        }

        /// <summary>
        /// 根据多个主键查找
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public virtual TEntity Find(params object[] keyValues)
        {
            return Entities.Find(keyValues);
        }

        /// <summary>
        /// 根据主键查找
        /// </summary>
        /// <param name="key"></param>
        /// <param name="cancellationToken"></param>
        /// <returns></returns>
        public virtual async Task<TEntity> FindAsync(object key, CancellationToken cancellationToken = default)
        {
            var entity = await Entities.FindAsync(new object[] { key }, cancellationToken);
            return entity;
        }

        /// <summary>
        /// 根据多个主键查找
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        public virtual async Task<TEntity> FindAsync(params object[] keyValues)
        {
            var entity = await Entities.FindAsync(keyValues);
            return entity;
        }

        /// <summary>
        /// 根据多个主键查找
        /// </summary>
        /// <param name="keyValues"></param>
        /// <param name="cancellationToken"></param>
        /// <returns></returns>
        public virtual async Task<TEntity> FindAsync(object[] keyValues, CancellationToken cancellationToken = default)
        {
            var entity = await Entities.FindAsync(keyValues, cancellationToken);
            return entity;
        }

        /// <summary>
        /// 获取一条
        /// </summary>
        /// <returns></returns>
        public virtual TEntity Single()
        {
            return Entities.Single();
        }

        /// <summary>
        /// 获取一条
        /// </summary>
        /// <param name="predicate"></param>
        /// <returns></returns>
        public virtual TEntity Single(Expression<Func<TEntity, bool>> predicate)
        {
            return Entities.Single(predicate);
        }

        /// <summary>
        /// 获取一条
        /// </summary>
        /// <returns></returns>
        public virtual TEntity SingleOrDefault()
        {
            return Entities.SingleOrDefault();
        }

        /// <summary>
        /// 获取一条
        /// </summary>
        /// <param name="predicate"></param>
        /// <returns></returns>
        public virtual TEntity SingleOrDefault(Expression<Func<TEntity, bool>> predicate)
        {
            return Entities.SingleOrDefault(predicate);
        }

        /// <summary>
        /// 获取一条
        /// </summary>
        /// <param name="cancellationToken"></param>
        /// <returns></returns>
        public virtual Task<TEntity> SingleAsync(CancellationToken cancellationToken = default)
        {
            return Entities.SingleAsync(cancellationToken);
        }

        /// <summary>
        /// 获取一条
        /// </summary>
        /// <param name="predicate"></param>
        /// <param name="cancellationToken"></param>
        /// <returns></returns>
        public virtual Task<TEntity> SingleAsync(Expression<Func<TEntity, bool>> predicate, CancellationToken cancellationToken = default)
        {
            return Entities.SingleAsync(predicate, cancellationToken);
        }
    }
}